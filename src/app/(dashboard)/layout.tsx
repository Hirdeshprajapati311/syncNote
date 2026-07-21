import AppSidebar from "@/components/Navigations/AppSidebar"
const DashboardLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <main className="flex-1 min-h-0 overflow-auto">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
