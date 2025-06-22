  tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
            colors: {
                'fubr': {
                    'header': '#26282c',     // gray-700 equivalent
                    'nav': '#131313',        // gray-900 equivalent  
                    'accent': '#ef4444',     // red-500 equivalent
                    'background': '#131313', // main background color
                    'red': '#ef4444',        // dynamic red color
                },
                'custom-red': '#ef4444'      // alternative red color
            }
        }
    }
}