import { useMediaQuery } from '@mui/material';
import { Heading, Paragraph } from '@nn-design-system/react-component-library';
import { format } from 'date-fns';
import { SetStateAction, useCallback, useState } from 'react';
import {
  VictoryAxis,
  VictoryChart,
  VictoryGroup,
  VictoryLegend,
  VictoryLine,
  VictoryScatter,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from 'victory';

const uniqueData = (data: any) => {
  return Array.from(
    new Map(
      data.map((item: { x: any; y: any }) => [`${item.x}-${item.y}`, item]),
    ).values(),
  );
};

export default function LineChat({
  data,
  filters,
  tickCount,
  onClick,
}: {
  data: any;
  filters: string[];
  tickCount: number;
  onClick?: React.ChangeEventHandler<HTMLInputElement>;
}) {
  const isNotDesktop = useMediaQuery('(min-width:768px)', { noSsr: true });

  const [selectedFilter, setSelectedFilter] = useState(filters[0]);

  const transformedData = Object.values(data?.chartData).map((value: any) => ({
    title: value.title,
    color: value.color,
    data: uniqueData(value.chartData.map(({ x, y }) => ({ x: new Date(x), y }))),
  }));

  const dataTets = transformedData.map((data) => data.data);

  const datoX = isNotDesktop
    ? dataTets.map((item) => item.filter((dato) => dato.x % 2 !== 0))
    : dataTets;
  console.log('dat', datoX);
  const internalOnClick = useCallback(
    (event: SetStateAction<string>) => {
      setSelectedFilter(event);
      if (onClick) {
        onClick(event);
      }
    },
    [onClick],
  );

  return (
    <div>
      <div className="flex gap-5">
        {filters?.map((ch) => (
          <div key={ch} onClick={() => internalOnClick(ch)} className="mb-4">
            <div
              id="cheap"
              className={`whitespace-nowrap rounded-full h-9 p-4 flex items-center justify-center border text-sm transition-all shadow-md cursor-pointer
${
  selectedFilter === ch
    ? 'bg-primary text-white border-transparent'
    : 'bg-white text-font-gray'
}`}
            >
              {ch}
            </div>
          </div>
        ))}
      </div>
      <VictoryChart
        containerComponent={<VictoryVoronoiContainer />}
        theme={VictoryTheme.clean}
        scale={{ x: 'time' }}
        padding={{
          top: 20,
          left: 40,
          right: 10,
          bottom: 100,
        }}
      >
        <VictoryAxis
          name="Xaxis"
          tickValues={datoX.map((a) => a.map((b) => b.x))}
          // tickCount={tickCount}
          tickFormat={(x: string | number | Date) => {
            const date = new Date(x);
            return date.toLocaleDateString('es-ES', {
              day: '2-digit',
            });
          }}
          style={{
            tickLabels: {
              fontSize: 8,
            },
            ticks: {
              stroke: '#757575',
              strokeWidth: 1,
            },
          }}
        />
        <VictoryAxis
          name="Yaxis"
          dependentAxis
          tickCount={6}
          style={{
            axis: {
              stroke: 'transparent',
            },
            axisLabel: {
              fontSize: 8,
              padding: 50,
            },
            tickLabels: {
              fontSize: 8,
            },
            grid: {
              stroke: '#d9d9d9',
            },
          }}
        />
        {dataTets?.map((elem, i) => {
          return (
            <VictoryGroup data={elem} key={`group-${i}`}>
              <VictoryLine
                labelComponent={
                  <VictoryTooltip
                    constrainToVisibleArea
                    flyoutStyle={{
                      fill: 'white', // Fondo del tooltip
                      stroke: '#E3E3E3', // Sin borde
                      strokeWidth: 1, // Sin grosor de borde
                      borderRadius: 0, // Sin borde radius
                    }}
                    style={{
                      fontSize: 12,
                      border: 0,
                      fill: 'black', // Color del texto
                    }}
                  />
                }
                style={{
                  data: {
                    stroke: transformedData[i].color,
                    strokeWidth: 1,
                  },
                }}
                labels={({ datum }) =>
                  `${format(
                    new Date(datum.x),
                    'dd/MM/yyyy',
                  )} \n ${Intl.NumberFormat('de-DE').format(Number(datum.y))}€`
                }
              />
              <VictoryScatter
                size={3}
                symbol="circle"
                style={{
                  data: {
                    fill: transformedData[i].color,
                  },
                }}
              />
            </VictoryGroup>
          );
        })}
        <VictoryLegend
          x={-12}
          y={230}
          data={transformedData.map((s) => ({
            name: s.title,
            symbol: { fill: s.color, type: 'circle' },
          }))}
          style={{
            labels: {
              fontSize: 10,
            },
            border: {
              stroke: 'transparent',
            },
          }}
        />
      </VictoryChart>
      <div>
        <Heading variant="Small">Información</Heading>
        <Paragraph>
          Su capital garantizado crece con la subida de los mercados y se consolida en el
          tiempo, de modo que, si los mercados bajan, su capital garantizado se mantiene.
          Cuando usted disponga del valor de su inversión, siempre tendrá la tranquilidad
          de saber que, siempre y en cualquier circunstancia, éste será, como mínimo, del
          85% de las primas pagadas. La gestión de la dinámica de la inversión distribuye
          diariamente el capital entre fondos de inversión de renta variable, para buscar
          rentabilidad, y activos de protección, para límitar riesgos.
        </Paragraph>
      </div>
    </div>
  );
}
