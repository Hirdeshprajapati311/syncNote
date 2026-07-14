import DashboardHeader from "@/components/Navigations/headers/DashboardHeader"
import AppSidebar from "@/components/Navigations/AppSidebar"
const DashboardLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div>
      <AppSidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
