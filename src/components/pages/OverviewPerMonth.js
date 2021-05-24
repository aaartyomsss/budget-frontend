import React from 'react'
import { useSelector } from 'react-redux'
import { getAllCategories, filterPerCategory } from '../../functions/overviewFormatters'
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from 'recharts'


const OverviewPerMonth = () => {

    const personalExpenses = useSelector(state => state.personalExpenses)
    const categories = getAllCategories(personalExpenses)
    const data = filterPerCategory(personalExpenses, categories)
    
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    // TODO write proper legend styles
    const renderLegend = (props) => {
        const { payload } = props;
        console.log(payload)
        return (
          <ul className='piechart-legend'>
            {
              payload.map((entry, index) => (
                <li key={`item-${index}`} style={{ color: entry.color }}>{entry.payload.category}</li>
              ))
            }
          </ul>
        );
      }

    return (
        <div>
            <PieChart width={750} height={400}>
                <Legend height={50} content={renderLegend}/>
                <Pie 
                    data={data} 
                    dataKey='spent' 
                    nameKey='name' 
                    fill='#0f52ba' 
                    label={renderCustomizedLabel}
                    labelLine={false}
                >
                    {data.map((entry, i) => (
                        <Cell key={`cell${i}`} fill={COLORS[i % COLORS.length]}/>
                    ))}
                </Pie> 
            </PieChart>
        </div>
    )

}

export default OverviewPerMonth