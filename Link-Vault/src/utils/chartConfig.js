import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                usePointStyle: true,
                padding: 20,
                color: 'oklch(0.5510 0.0234 264.3637)', // muted-foreground
                font: {
                    family: 'Inter, sans-serif',
                    size: 12
                }
            }
        },
        tooltip: {
            backgroundColor: 'oklch(0.2686 0 0)',
            titleColor: '#fff',
            bodyColor: '#fff',
            padding: 10,
            cornerRadius: 8,
            displayColors: false,
        }
    },
    scales: {
        x: {
            grid: {
                display: false,
                drawBorder: false,
            },
            ticks: {
                color: 'oklch(0.5510 0.0234 264.3637)',
                font: {
                    family: 'Inter, sans-serif',
                }
            }
        },
        y: {
            grid: {
                color: 'oklch(0.9276 0.0058 264.5313)', // border
                drawBorder: false,
                borderDash: [5, 5],
            },
            ticks: {
                color: 'oklch(0.5510 0.0234 264.3637)',
                font: {
                    family: 'Inter, sans-serif',
                }
            }
        }
    }
};
