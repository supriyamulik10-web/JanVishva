module.exports = [
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/janvishwa/node_modules/@clerk/nextjs/dist/esm/chunk-BUSYA2B4.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__commonJS",
    ()=>__commonJS
]);
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod)=>function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
;
 //# sourceMappingURL=chunk-BUSYA2B4.js.map
}),
"[project]/janvishwa/node_modules/@clerk/nextjs/dist/esm/runtime/node/safe-node-apis.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$chunk$2d$BUSYA2B4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/janvishwa/node_modules/@clerk/nextjs/dist/esm/chunk-BUSYA2B4.js [app-rsc] (ecmascript)");
;
var require_safe_node_apis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$chunk$2d$BUSYA2B4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__commonJS"])({
    "src/runtime/node/safe-node-apis.js" (exports, module) {
        const { existsSync, writeFileSync, readFileSync, appendFileSync, mkdirSync, rmSync } = __turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)");
        const path = __turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)");
        const fs = {
            existsSync,
            writeFileSync,
            readFileSync,
            appendFileSync,
            mkdirSync,
            rmSync
        };
        const cwd = ()=>process.cwd();
        module.exports = {
            fs,
            path,
            cwd
        };
    }
});
const __TURBOPACK__default__export__ = require_safe_node_apis();
 //# sourceMappingURL=safe-node-apis.js.map
}),
"[project]/janvishwa/node_modules/@clerk/nextjs/dist/esm/server/fs/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nodeCwdOrThrow",
    ()=>nodeCwdOrThrow,
    "nodeFsOrThrow",
    ()=>nodeFsOrThrow,
    "nodePathOrThrow",
    ()=>nodePathOrThrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/janvishwa/node_modules/@clerk/nextjs/dist/esm/runtime/node/safe-node-apis.js [app-rsc] (ecmascript)");
;
;
function assertNotNullable(value, moduleName) {
    if (!value) {
        throw new Error(`Clerk: ${moduleName} is missing. This is an internal error. Please contact Clerk's support.`);
    }
}
const nodeFsOrThrow = ()=>{
    assertNotNullable(__TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fs, "fs");
    return __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fs;
};
const nodePathOrThrow = ()=>{
    assertNotNullable(__TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].path, "path");
    return __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].path;
};
const nodeCwdOrThrow = ()=>{
    assertNotNullable(__TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].cwd, "cwd");
    return __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].cwd;
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/janvishwa/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f5e9e664fc7dfcca7046a4dd3a5fca5cf193f3957":"formatMetadataHeaders","7f67360c058d4904dfa546df9c833466a9aa5dcfbe":"collectKeylessMetadata"},"",""] */ __turbopack_context__.s([
    "collectKeylessMetadata",
    ()=>collectKeylessMetadata,
    "formatMetadataHeaders",
    ()=>formatMetadataHeaders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/janvishwa/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/janvishwa/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/janvishwa/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/janvishwa/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function collectKeylessMetadata() {
    var _a, _b, _c, _d, _e, _f;
    const headerStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])();
    return {
        nodeVersion: process.version,
        nextVersion: getNextVersion(),
        npmConfigUserAgent: process.env.npm_config_user_agent,
        // eslint-disable-line
        userAgent: (_a = headerStore.get("User-Agent")) != null ? _a : "unknown user-agent",
        port: process.env.PORT,
        // eslint-disable-line
        host: (_b = headerStore.get("host")) != null ? _b : "unknown host",
        xPort: (_c = headerStore.get("x-forwarded-port")) != null ? _c : "unknown x-forwarded-port",
        xHost: (_d = headerStore.get("x-forwarded-host")) != null ? _d : "unknown x-forwarded-host",
        xProtocol: (_e = headerStore.get("x-forwarded-proto")) != null ? _e : "unknown x-forwarded-proto",
        xClerkAuthStatus: (_f = headerStore.get("x-clerk-auth-status")) != null ? _f : "unknown x-clerk-auth-status",
        isCI: detectCIEnvironment()
    };
}
const CI_ENV_VARS = [
    "CI",
    "CONTINUOUS_INTEGRATION",
    "BUILD_NUMBER",
    "BUILD_ID",
    "BUILDKITE",
    "CIRCLECI",
    "GITHUB_ACTIONS",
    "GITLAB_CI",
    "JENKINS_URL",
    "TRAVIS",
    "APPVEYOR",
    "WERCKER",
    "DRONE",
    "CODESHIP",
    "SEMAPHORE",
    "SHIPPABLE",
    "TEAMCITY_VERSION",
    "BAMBOO_BUILDKEY",
    "GO_PIPELINE_NAME",
    "TF_BUILD",
    "SYSTEM_TEAMFOUNDATIONCOLLECTIONURI",
    "BITBUCKET_BUILD_NUMBER",
    "HEROKU_TEST_RUN_ID",
    "VERCEL",
    "NETLIFY"
];
function detectCIEnvironment() {
    const ciIndicators = CI_ENV_VARS;
    const falsyValues = /* @__PURE__ */ new Set([
        "",
        "false",
        "0",
        "no"
    ]);
    return ciIndicators.some((indicator)=>{
        const value = process.env[indicator];
        if (value === void 0) {
            return false;
        }
        const normalizedValue = value.trim().toLowerCase();
        return !falsyValues.has(normalizedValue);
    });
}
function getNextVersion() {
    var _a;
    try {
        return (_a = process.title) != null ? _a : "unknown-process-title";
    } catch  {
        return void 0;
    }
}
function formatMetadataHeaders(metadata) {
    const headers2 = new Headers();
    if (metadata.nodeVersion) {
        headers2.set("Clerk-Node-Version", metadata.nodeVersion);
    }
    if (metadata.nextVersion) {
        headers2.set("Clerk-Next-Version", metadata.nextVersion);
    }
    if (metadata.npmConfigUserAgent) {
        headers2.set("Clerk-NPM-Config-User-Agent", metadata.npmConfigUserAgent);
    }
    if (metadata.userAgent) {
        headers2.set("Clerk-Client-User-Agent", metadata.userAgent);
    }
    if (metadata.port) {
        headers2.set("Clerk-Node-Port", metadata.port);
    }
    if (metadata.host) {
        headers2.set("Clerk-Client-Host", metadata.host);
    }
    if (metadata.xPort) {
        headers2.set("Clerk-X-Port", metadata.xPort);
    }
    if (metadata.xHost) {
        headers2.set("Clerk-X-Host", metadata.xHost);
    }
    if (metadata.xProtocol) {
        headers2.set("Clerk-X-Protocol", metadata.xProtocol);
    }
    if (metadata.xClerkAuthStatus) {
        headers2.set("Clerk-Auth-Status", metadata.xClerkAuthStatus);
    }
    if (metadata.isCI) {
        headers2.set("Clerk-Is-CI", "true");
    }
    return headers2;
}
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    collectKeylessMetadata,
    formatMetadataHeaders
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(collectKeylessMetadata, "7f67360c058d4904dfa546df9c833466a9aa5dcfbe", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(formatMetadataHeaders, "7f5e9e664fc7dfcca7046a4dd3a5fca5cf193f3957", null);
 //# sourceMappingURL=keyless-custom-headers.js.map
}),
"[project]/janvishwa/node_modules/@clerk/nextjs/dist/esm/server/keyless-node.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOrReadKeyless",
    ()=>createOrReadKeyless,
    "removeKeyless",
    ()=>removeKeyless,
    "safeParseClerkFile",
    ()=>safeParseClerkFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createClerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/janvishwa/node_modules/@clerk/nextjs/dist/esm/server/createClerkClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/janvishwa/node_modules/@clerk/nextjs/dist/esm/server/fs/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/janvishwa/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)");
;
;
;
;
const CLERK_HIDDEN = ".clerk";
const CLERK_LOCK = "clerk.lock";
function updateGitignore() {
    const { existsSync, writeFileSync, readFileSync, appendFileSync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeFsOrThrow"])();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodePathOrThrow"])();
    const cwd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeCwdOrThrow"])();
    const gitignorePath = path.join(cwd(), ".gitignore");
    if (!existsSync(gitignorePath)) {
        writeFileSync(gitignorePath, "");
    }
    const gitignoreContent = readFileSync(gitignorePath, "utf-8");
    const COMMENT = `# clerk configuration (can include secrets)`;
    if (!gitignoreContent.includes(CLERK_HIDDEN + "/")) {
        appendFileSync(gitignorePath, `
${COMMENT}
/${CLERK_HIDDEN}/
`);
    }
}
const generatePath = (...slugs)=>{
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodePathOrThrow"])();
    const cwd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeCwdOrThrow"])();
    return path.join(cwd(), CLERK_HIDDEN, ...slugs);
};
const _TEMP_DIR_NAME = ".tmp";
const getKeylessConfigurationPath = ()=>generatePath(_TEMP_DIR_NAME, "keyless.json");
const getKeylessReadMePath = ()=>generatePath(_TEMP_DIR_NAME, "README.md");
let isCreatingFile = false;
function safeParseClerkFile() {
    const { readFileSync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeFsOrThrow"])();
    try {
        const CONFIG_PATH = getKeylessConfigurationPath();
        let fileAsString;
        try {
            fileAsString = readFileSync(CONFIG_PATH, {
                encoding: "utf-8"
            }) || "{}";
        } catch  {
            fileAsString = "{}";
        }
        return JSON.parse(fileAsString);
    } catch  {
        return void 0;
    }
}
const lockFileWriting = ()=>{
    const { writeFileSync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeFsOrThrow"])();
    isCreatingFile = true;
    writeFileSync(CLERK_LOCK, // In the rare case, the file persists give the developer enough context.
    "This file can be deleted. Please delete this file and refresh your application", {
        encoding: "utf8",
        mode: "0777",
        flag: "w"
    });
};
const unlockFileWriting = ()=>{
    const { rmSync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeFsOrThrow"])();
    try {
        rmSync(CLERK_LOCK, {
            force: true,
            recursive: true
        });
    } catch  {}
    isCreatingFile = false;
};
const isFileWritingLocked = ()=>{
    const { existsSync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeFsOrThrow"])();
    return isCreatingFile || existsSync(CLERK_LOCK);
};
async function createOrReadKeyless() {
    const { writeFileSync, mkdirSync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeFsOrThrow"])();
    if (isFileWritingLocked()) {
        return null;
    }
    lockFileWriting();
    const CONFIG_PATH = getKeylessConfigurationPath();
    const README_PATH = getKeylessReadMePath();
    mkdirSync(generatePath(_TEMP_DIR_NAME), {
        recursive: true
    });
    updateGitignore();
    const envVarsMap = safeParseClerkFile();
    if ((envVarsMap == null ? void 0 : envVarsMap.publishableKey) && (envVarsMap == null ? void 0 : envVarsMap.secretKey)) {
        unlockFileWriting();
        return envVarsMap;
    }
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createClerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClerkClientWithOptions"])({});
    const keylessHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collectKeylessMetadata"])().then(__TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatMetadataHeaders"]).catch(()=>new Headers());
    const accountlessApplication = await client.__experimental_accountlessApplications.createAccountlessApplication({
        requestHeaders: keylessHeaders
    }).catch(()=>null);
    if (accountlessApplication) {
        writeFileSync(CONFIG_PATH, JSON.stringify(accountlessApplication), {
            encoding: "utf8",
            mode: "0777",
            flag: "w"
        });
        const README_NOTIFICATION = `
## DO NOT COMMIT
This directory is auto-generated from \`@clerk/nextjs\` because you are running in Keyless mode. Avoid committing the \`.clerk/\` directory as it includes the secret key of the unclaimed instance.
  `;
        writeFileSync(README_PATH, README_NOTIFICATION, {
            encoding: "utf8",
            mode: "0777",
            flag: "w"
        });
    }
    unlockFileWriting();
    return accountlessApplication;
}
function removeKeyless() {
    const { rmSync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeFsOrThrow"])();
    if (isFileWritingLocked()) {
        return void 0;
    }
    lockFileWriting();
    try {
        rmSync(generatePath(), {
            force: true,
            recursive: true
        });
    } catch  {}
    unlockFileWriting();
}
;
 //# sourceMappingURL=keyless-node.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__eed351a4._.js.map