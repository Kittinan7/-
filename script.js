let myChart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10,  // กำหนดให้แบ่งห่างทีละ 10
                    callback: function(value) {
                        if (Number.isInteger(value)) {
                            return value;  // แสดงเฉพาะจำนวนเต็ม
                        }
                    }
                },
                grid: {
                    color: '#e0e0e0'
                }
            },
            x: {
                grid: {
                    color: '#f0f0f0'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#333'
                }
            },
            tooltip: {
                enabled: false // ปิด tooltip หากต้องการ
            },
            datalabels: { // เพิ่ม datalabels เพื่อแสดงค่าบนกราฟ
                display: true,
                color: '#000', // สีของตัวเลขที่แสดงบนแท่ง
                anchor: 'end', // ตำแหน่งของตัวเลข
                align: 'start', // ตำแหน่งในแนวตั้งของตัวเลข
                formatter: function(value, context) {
                    return value; // แสดงค่าที่ตรงกับแท่งนั้น
                }
            }
        }
    }
});
