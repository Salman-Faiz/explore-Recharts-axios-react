import React from 'react';
import { AreaChart as AC, Area, XAxis,Tooltip,BarChart,Bar, YAxis,ReferenceLine } from 'recharts';

const AreaChart = () => {
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
                physics: 78,
                chemistry: 84
            },
            totalMarks :100
        },
        {
            id: 10,
            name: "Anna Anderson",
            scores: {
                math: 100,
                physics: 45,
                chemistry: 91
            },
            totalMarks :100
        }
    ];
    return (
        <div>
            <AC
          width={800}
          height={500}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
        
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="scores.math" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="scores.physics" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="scores.chemistry" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AC>
        <h4 className='text-4xl ps-10'>Area chart</h4>

        <BarChart width={800} height={450} data={data}>
          <Bar dataKey="scores.chemistry" fill="#8884d8" />
          <XAxis dataKey={'name'}></XAxis>
        </BarChart>
        </div>
    );
};

export default AreaChart;