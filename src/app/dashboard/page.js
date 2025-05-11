import styles from "@/app/ui/home.module.css";
import InvoiceStatus from "@/app/ui/invoices/status"

export default function DashboardPage({invoice}) {
    const invoices = [
        { id: '1001', status: 'pending' },
        { id: '1002', status: 'paid' },
    ]

    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className={styles.shape} >
                <h1>welcome dashboard page</h1>
            </div>
            <div>
                <h1 className="text-2xl font-bold mb-4">发票列表</h1>
                <ul className="space-y-2">
                    {invoices.map(inv => (
                        <li key={inv.id} className="flex items-center space-x-4">
                            <span>invoice #{inv.id}</span>
                            <InvoiceStatus status={inv.status}/>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}