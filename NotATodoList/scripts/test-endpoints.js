const { spawn } = require("child_process")
const path = require("path")

const method = (process.argv[2] || "GET").toUpperCase()
const route = process.argv[3] || "/"
const rawPayload = process.argv[4] || ""

const PORT = 3000
const URL = `http://localhost:${PORT}${route}`

function parsePayload(raw) {
  if (!raw) return undefined

  try {
    return JSON.parse(raw)
  } catch (error) {
    return raw
  }
}

function waitForServer(timeoutMs = 10000) {
  const start = Date.now()

  return new Promise((resolve, reject) => {
    const check = async () => {
      try {
        const response = await fetch(URL, { method: "GET" })
        if (response.ok || response.status < 500) {
          resolve()
          return
        }
      } catch (error) {
        // server not ready yet
      }

      if (Date.now() - start >= timeoutMs) {
        reject(new Error("Server did not start in time."))
        return
      }

      setTimeout(check, 250)
    }

    check()
  })
}

async function ensureServer() {
  try {
    await fetch(URL, { method: "GET" })
    return
  } catch (error) {
    console.log("Starting local server for endpoint tests...")

    spawn(process.execPath, ["index.js"], {
      cwd: path.resolve(__dirname, ".."),
      stdio: "inherit"
    })

    await waitForServer()
  }
}

async function makeRequest() {
  const payload = parsePayload(rawPayload)
  const options = {
    method,
    headers: {
      "Content-Type": "application/json"
    }
  }

  if (payload !== undefined && method !== "GET" && method !== "DELETE") {
    options.body = JSON.stringify(payload)
  }

  const response = await fetch(URL, options)
  const text = await response.text()

  console.log(`\n${method} ${URL}`)
  console.log(`Status: ${response.status}`)

  if (text) {
    try {
      console.log(JSON.stringify(JSON.parse(text), null, 2))
    } catch (error) {
      console.log(text)
    }
  } else {
    console.log("(empty response body)")
  }

  if (!response.ok) {
    process.exitCode = 1
  }
}

async function main() {
  await ensureServer()
  await makeRequest()
}

main().catch((error) => {
  console.error("Endpoint test failed:", error)
  process.exit(1)
})
