(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/janvishwa/app/sign-up/verify-email-address/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VerifyEmailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/janvishwa/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/janvishwa/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/janvishwa/node_modules/@clerk/shared/dist/react/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/janvishwa/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function VerifyEmailPage() {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VerifyEmailPage.useEffect": ()=>{
            if (user) {
                var _user_unsafeMetadata;
                const type = user === null || user === void 0 ? void 0 : (_user_unsafeMetadata = user.unsafeMetadata) === null || _user_unsafeMetadata === void 0 ? void 0 : _user_unsafeMetadata.userType;
                if (type === 'ngo') {
                    router.push('/onboarding/ngo/step-1');
                } else {
                    router.push('/onboarding/individual');
                }
            }
        }
    }["VerifyEmailPage.useEffect"], [
        user
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-700 font-medium",
            children: "Verifying email, please wait..."
        }, void 0, false, {
            fileName: "[project]/janvishwa/app/sign-up/verify-email-address/page.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/janvishwa/app/sign-up/verify-email-address/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(VerifyEmailPage, "nfa3wheCqA+B86qn1Y5uRDqrUWI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"],
        __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = VerifyEmailPage;
var _c;
__turbopack_context__.k.register(_c, "VerifyEmailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=janvishwa_app_sign-up_verify-email-address_page_tsx_f384de14._.js.map