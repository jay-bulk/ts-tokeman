import fs from "fs"
import path from "path"
import

module.exports = {
    getVersion,
    getToken,
    getJwt,
    getId,
    getClaims,
    setId,
    setSecret,
    setIdSecret,
    setConfig
}
function getVersion(): string {
    const packageJSONPath = path.resolve(__dirname, "/package.json")
    const content = fs.readFileSync(packageJSONPath, { encoding: "utf8" })
    const config = JSON.parse(content)
    return config.version
}

function getToken(): Object {

}