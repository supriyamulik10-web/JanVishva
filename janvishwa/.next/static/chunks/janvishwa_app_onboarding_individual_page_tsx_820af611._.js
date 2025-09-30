(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/janvishwa/app/onboarding/individual/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IndividualOnboarding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/janvishwa/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/janvishwa/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/janvishwa/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/janvishwa/node_modules/@clerk/shared/dist/react/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function IndividualOnboarding() {
    _s();
    const { user, isSignedIn, isLoaded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        skills: [],
        interests: []
    });
    const skillOptions = [
        'Teaching',
        'Healthcare',
        'Technology',
        'Marketing',
        'Finance',
        'Legal',
        'Construction',
        'Arts'
    ];
    const interestOptions = [
        'Education',
        'Healthcare',
        'Environment',
        'Poverty Alleviation',
        'Women Empowerment',
        'Child Welfare'
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IndividualOnboarding.useEffect": ()=>{
            console.log('Onboarding - isLoaded:', isLoaded, 'isSignedIn:', isSignedIn);
            if (!isLoaded) return;
            if (!isSignedIn) {
                console.log('Not signed in, redirecting to sign-in');
                router.push('/sign-in');
                return;
            }
            setLoading(false);
        }
    }["IndividualOnboarding.useEffect"], [
        isLoaded,
        isSignedIn,
        router
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!user) {
            setError('User not found. Please sign in again.');
            return;
        }
        setLoading(true);
        setError('');
        console.log('Submitting onboarding data...');
        try {
            var _user_emailAddresses_, _user_emailAddresses;
            const payload = {
                clerkUserId: user.id,
                email: ((_user_emailAddresses = user.emailAddresses) === null || _user_emailAddresses === void 0 ? void 0 : (_user_emailAddresses_ = _user_emailAddresses[0]) === null || _user_emailAddresses_ === void 0 ? void 0 : _user_emailAddresses_.emailAddress) || '',
                firstName: user.firstName,
                lastName: user.lastName,
                ...formData
            };
            console.log('Payload:', payload);
            const res = await fetch('/api/onboarding/individual', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            console.log('Response status:', res.status);
            const data = await res.json();
            console.log('Response data:', data);
            if (res.ok && data.success) {
                console.log('Profile saved successfully, redirecting to dashboard...');
                // Force a hard redirect to ensure dashboard loads fresh data
                window.location.href = '/dashboard';
            } else {
                setError((data === null || data === void 0 ? void 0 : data.error) || (data === null || data === void 0 ? void 0 : data.details) || 'Failed to save profile.');
                setLoading(false);
            }
        } catch (err) {
            console.error('Error submitting form:', err);
            setError('Failed to save profile. Please try again.');
            setLoading(false);
        }
    };
    const toggleArrayItem = (array, item)=>array.includes(item) ? array.filter((i)=>i !== item) : [
            ...array,
            item
        ];
    if (!isLoaded || loading && !error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
            lineNumber: 91,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 py-12 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-lg p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-gray-900 mb-2",
                        children: "Complete Your Profile"
                    }, void 0, false, {
                        fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-8",
                        children: "Help us personalize your JanVishva experience"
                    }, void 0, false, {
                        fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 p-4 bg-red-50 border border-red-200 rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-800 text-sm",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                            lineNumber: 109,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                        lineNumber: 108,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Phone Number"
                                    }, void 0, false, {
                                        fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "tel",
                                        value: formData.phone,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                phone: e.target.value
                                            }),
                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent",
                                        placeholder: "+91 1234567890"
                                    }, void 0, false, {
                                        fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Address"
                                    }, void 0, false, {
                                        fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: formData.address,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                address: e.target.value
                                            }),
                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent",
                                        placeholder: "Street address"
                                    }, void 0, false, {
                                        fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "City"
                                            }, void 0, false, {
                                                fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: formData.city,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        city: e.target.value
                                                    }),
                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent",
                                                placeholder: "Pune"
                                            }, void 0, false, {
                                                fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "State"
                                            }, void 0, false, {
                                                fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: formData.state,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        state: e.target.value
                                                    }),
                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent",
                                                placeholder: "Maharashtra"
                                            }, void 0, false, {
                                                fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Pincode"
                                    }, void 0, false, {
                                        fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: formData.pincode,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                pincode: e.target.value
                                            }),
                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent",
                                        placeholder: "411001",
                                        maxLength: 6
                                    }, void 0, false, {
                                        fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Your Skills (Select all that apply)"
                                    }, void 0, false, {
                                        fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: skillOptions.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setFormData({
                                                        ...formData,
                                                        skills: toggleArrayItem(formData.skills, skill)
                                                    }),
                                                className: "px-4 py-2 rounded-lg border-2 transition-colors ".concat(formData.skills.includes(skill) ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-gray-200 hover:border-orange-300'),
                                                children: skill
                                            }, skill, false, {
                                                fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Interests (Causes you care about)"
                                    }, void 0, false, {
                                        fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: interestOptions.map((interest)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setFormData({
                                                        ...formData,
                                                        interests: toggleArrayItem(formData.interests, interest)
                                                    }),
                                                className: "px-4 py-2 rounded-lg border-2 transition-colors ".concat(formData.interests.includes(interest) ? 'border-green-500 bg-green-50 text-green-700' : 'border-gray-200 hover:border-green-300'),
                                                children: interest
                                            }, interest, false, {
                                                fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                                lineNumber: 195,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: loading,
                                className: "w-full py-3 bg-gradient-to-r from-orange-500 to-green-500 text-white rounded-xl hover:from-orange-600 hover:to-green-600 font-semibold transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed",
                                children: loading ? 'Saving...' : 'Complete Registration'
                            }, void 0, false, {
                                fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
            lineNumber: 102,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/janvishwa/app/onboarding/individual/page.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s(IndividualOnboarding, "E8yeLHuwMq2j1Hxo0UB13wWe7Ck=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"],
        __TURBOPACK__imported__module__$5b$project$5d2f$janvishwa$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = IndividualOnboarding;
var _c;
__turbopack_context__.k.register(_c, "IndividualOnboarding");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=janvishwa_app_onboarding_individual_page_tsx_820af611._.js.map