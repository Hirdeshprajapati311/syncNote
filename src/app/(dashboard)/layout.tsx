import AppSidebar from "@/components/Navigations/AppSidebar"
const DashboardLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div>
      <AppSidebar />
      <main>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
