
'use client'
import AppSidebar from "@/components/Navigations/AppSidebar"
import AuthProvider from "../../../providers/AuthProvider"
import { useState } from "react"
import ConfirmLogoutModal from "@/components/modals/ConfirmLogoutModal"
const DashboardLayout = ({ children }: {
  children: React.ReactNode
}) => {

  const [logoutModalOpen, setLogoutModalOpen] = useState(false)

  return (
    <AuthProvider>
      <div className="flex h-screen">
        <AppSidebar onLogout={() => setLogoutModalOpen(true)} />
        <main className="flex-1 min-h-0 overflow-auto">
          {children}
        </main>

        <ConfirmLogoutModal open={logoutModalOpen} onClose={() => setLogoutModalOpen(false)} />
      </div>
    </AuthProvider>
  )
}

export default DashboardLayout
