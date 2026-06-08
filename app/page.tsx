import { LayoutDashboard, Shield, Activity, Settings, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-950 font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white dark:bg-gray-900 p-6 flex flex-col gap-8">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <Shield className="w-8 h-8 text-blue-600" />
          <span>Sentinel Ops</span>
        </div>
        
        <nav className="flex flex-col gap-2">
          {[
            { icon: LayoutDashboard, label: "Dashboard", active: true },
            { icon: Activity, label: "Real-time Monitoring" },
            { icon: Users, label: "Team Members" },
            { icon: Settings, label: "Configurations" }
          ].map((item) => (
            <a 
              key={item.label}
              href="#" 
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                item.active 
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400" 
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">System Overview</h1>
            <p className="text-gray-500">Welcome back, Sentinel Commander.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white dark:bg-gray-900 px-4 py-2 border rounded-lg flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium">All systems operational</span>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { label: "Active Threats", value: "0", color: "text-green-600", bg: "bg-green-50" },
            { label: "Uptime", value: "99.98%", color: "text-blue-600", bg: "bg-blue-50" },
            { label: "Requests/sec", value: "1,240", color: "text-purple-600", bg: "bg-purple-50" }
          ].map((stat) => (
            <div key={stat.label} className="p-6 bg-white dark:bg-gray-900 border rounded-xl shadow-sm">
              <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
              <h3 className={`text-3xl font-bold ${stat.color}`}>{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Placeholder for Charts/Data */}
        <div className="bg-white dark:bg-gray-900 border rounded-xl p-8 h-[400px] flex items-center justify-center text-gray-400 italic">
          System telemetry visualization pending...
        </div>
      </main>
    </div>
  );
}
