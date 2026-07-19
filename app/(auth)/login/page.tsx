import LoginUI from '@/module/auth/components/login-ui';
import { requireUnAuth } from '@/module/auth/utils/auth-utils';
import React from 'react'

const LoginPage = async () => {
    // middleware/proxy -> to access this page we need unauthenticated users
    await requireUnAuth();
    return (
        <div>
            <LoginUI/>
        </div>
    )
}

export default LoginPage;