import { Line, Doughnut, Bar } from 'react-chartjs-2';
import { commonOptions } from '../utils/chartConfig';
import { ArrowUpRight, TrendingUp, Users, MousePointer2 } from 'lucide-react';

export default function AnalyticsSection() {
    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Visitors',
                data: [1200, 1900, 1500, 2800, 2200, 3500],
                borderColor: '#f59e0b', // primary
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                fill: true,
                tension: 0.4,
            },
            {
                label: 'Page Views',
                data: [2000, 2500, 2100, 3800, 3200, 4800],
                borderColor: '#a855f7', // purple-500
                backgroundColor: 'rgba(168, 85, 247, 0.1)',
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const doughnutData = {
        labels: ['LLMs', 'Research', 'Tools', 'Design', 'Other'],
        datasets: [
            {
                data: [35, 25, 20, 15, 5],
                backgroundColor: [
                    '#f59e0b', // primary
                    '#a855f7', // purple-500
                    '#3b82f6', // blue-500
                    '#10b981', // emerald-500
                    '#64748b', // slate-500
                ],
                borderWidth: 0,
            },
        ],
    };

    const barData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Link Clicks',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: '#f59e0b',
                borderRadius: 4,
            },
        ],
    };

    return (
        <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-6 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Analytics Overview</h2>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                    Live Data
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Visitors vs Page Views - Line Chart */}
                <div className="col-span-1 min-h-[300px] rounded-xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <h3 className="font-semibold">Traffic Trends</h3>
                            <p className="text-sm text-muted-foreground">Visitors vs Page Views</p>
                        </div>
                        <div className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                            <TrendingUp className="h-3 w-3" />
                            +14.5%
                        </div>
                    </div>
                    <div className="h-[250px] w-full">
                        <Line data={lineData} options={commonOptions} />
                    </div>
                </div>

                {/* Category Distribution - Doughnut Chart */}
                <div className="col-span-1 min-h-[300px] rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <h3 className="font-semibold">Top Categories</h3>
                            <p className="text-sm text-muted-foreground">Distribution by Volume</p>
                        </div>
                        <div className="flex items-center gap-1 rounded-full bg-purple-500/10 px-2 py-1 text-xs font-medium text-purple-600">
                            <Users className="h-3 w-3" />
                            Users
                        </div>
                    </div>
                    <div className="relative flex h-[250px] w-full items-center justify-center">
                        <Doughnut
                            data={doughnutData}
                            options={{
                                ...commonOptions,
                                cutout: '70%',
                                plugins: {
                                    ...commonOptions.plugins,
                                    legend: { position: 'bottom' }
                                }
                            }}
                        />
                    </div>
                </div>

                {/* Weekly Click Activity - Bar Chart */}
                <div className="col-span-1 min-h-[300px] rounded-xl border border-border bg-card p-6 shadow-sm md:col-span-2 lg:col-span-3">
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <h3 className="font-semibold">Weekly Engagement</h3>
                            <p className="text-sm text-muted-foreground">Link Clicks per Day</p>
                        </div>
                        <div className="flex items-center gap-1 rounded-full bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-600">
                            <MousePointer2 className="h-3 w-3" />
                            High Activity
                        </div>
                    </div>
                    <div className="h-[250px] w-full">
                        <Bar data={barData} options={commonOptions} />
                    </div>
                </div>
            </div>
        </section>
    );
}
