import { LineChart, Line, XAxis, YAxis,ReferenceLine } from 'recharts';
const LineChartsDemo = () => {
    
const data = [
    {
        id: 1,
        name: "John Doe",
        scores: {
            math: 85,
            physics: 60,
            chemistry: 88
        },
        totalMarks :100
    },
    {
        id: 2,
        name: "Jane Smith",
        scores: {
            math: 62,
            physics: 99,
            chemistry: 94
        }
        ,
        totalMarks :100
    },
    {
        id: 3,
        name: "Sam Brown",
        scores: {
            math: 88,
            physics: 44,
            chemistry: 80
        },
        totalMarks :100
    },
    {
        id: 4,
        name: "Lisa Johnson",
        scores: {
            math: 48,
            physics: 52,
            chemistry: 85
        },
        totalMarks :100
    },
    {
        id: 5,
        name: "Michael Lee",
        scores: {
            math: 91,
            physics: 77,
            chemistry: 90
        },
        totalMarks :100
    },
    {
        id: 6,
        name: "Emily Davis",
        scores: {
            math: 65,
            physics: 94,
            chemistry: 96
        },
        totalMarks :100
    },
    {
        id: 7,
        name: "David Wilson",
        scores: {
            math: 76,
            physics: 81,
            chemistry: 59
        },
        totalMarks :100
    },
    {
        id: 8,
        name: "Sarah Martinez",
        scores: {
            math: 89,
            physics: 55,
            chemistry: 87
        },
        totalMarks :100
    },
    {
        id: 9,
        name: "Chris Taylor",
        scores: {
            math: 82,
            physics: 48,
            chemistry: 84
        },
        totalMarks :100
    },
    {
        id: 10,
        name: "Anna Anderson",
        scores: {
            math: 90,
            physics: 45,
            chemistry: 91
        },
        totalMarks :100
    }
];

    return (
        <div className='p-10'>
            <LineChart height={450} width={800} data={data}>
            <Line type="monotone" dataKey="scores.math" stroke="blue" />
            <Line type="monotone" dataKey="scores.physics" stroke="orange" />
            <Line type="monotone" dataKey="scores.chemistry" stroke="green" />
            
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }}></XAxis>
            <YAxis dataKey={'totalMarks'}></YAxis>
            <ReferenceLine y={70} label="Max" stroke="red" />

            </LineChart>
            <h3 className='text-4xl ps-10'>Line Chart</h3>
        </div>
    );
};

export default LineChartsDemo;

