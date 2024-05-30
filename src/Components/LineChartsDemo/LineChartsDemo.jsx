import { LineChart, Line, XAxis, YAxis } from 'recharts';
const LineChartsDemo = () => {
    
const data = [
    {
        id: 1,
        name: "John Doe",
        scores: {
            math: 85,
            physics: 90,
            chemistry: 88
        },
        totalMarks :100
    },
    {
        id: 2,
        name: "Jane Smith",
        scores: {
            math: 92,
            physics: 89,
            chemistry: 94
        }
        ,
        totalMarks :100
    },
    {
        id: 3,
        name: "Sam Brown",
        scores: {
            math: 78,
            physics: 84,
            chemistry: 80
        },
        totalMarks :100
    },
    {
        id: 4,
        name: "Lisa Johnson",
        scores: {
            math: 88,
            physics: 92,
            chemistry: 85
        },
        totalMarks :100
    },
    {
        id: 5,
        name: "Michael Lee",
        scores: {
            math: 91,
            physics: 87,
            chemistry: 90
        },
        totalMarks :100
    },
    {
        id: 6,
        name: "Emily Davis",
        scores: {
            math: 95,
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
            chemistry: 79
        },
        totalMarks :100
    },
    {
        id: 8,
        name: "Sarah Martinez",
        scores: {
            math: 89,
            physics: 85,
            chemistry: 87
        },
        totalMarks :100
    },
    {
        id: 9,
        name: "Chris Taylor",
        scores: {
            math: 82,
            physics: 88,
            chemistry: 84
        },
        totalMarks :100
    },
    {
        id: 10,
        name: "Anna Anderson",
        scores: {
            math: 90,
            physics: 93,
            chemistry: 91
        },
        totalMarks :100
    }
];

    return (
        <div className='p-10'>
            <LineChart height={450} width={800} data={data}>
            <Line type="monotone" dataKey="scores.math" stroke="blue" />
            <Line type="monotone" dataKey="scores.physics" stroke="red" />
            <Line type="monotone" dataKey="scores.chemistry" stroke="red" />
            
            <XAxis dataKey="name"></XAxis>
            <YAxis dataKey={'totalMarks'}></YAxis>

            </LineChart>
            <h3 className='text-4xl ps-10'>Line Chart</h3>
        </div>
    );
};

export default LineChartsDemo;

