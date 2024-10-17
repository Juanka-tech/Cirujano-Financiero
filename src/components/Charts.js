import React, { useState } from 'react';
import { Line, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, RadialLinearScale, Title, Tooltip, Legend, Filler } from 'chart.js';

// Registrar las escalas y otros módulos necesarios para ambos gráficos
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, RadialLinearScale, Title, Tooltip, Legend, Filler);

const data = {
  'Razón Corriente': [1.4, 1.5, 1.6],
  'Prueba Ácida': [1.1, 1.2, 1.3],
  'Rotación de Inventarios': [3.0, 3.2, 3.4],
  'Endeudamiento': [0.6, 0.7, 0.8],
};

const years = ['2020', '2021', '2022'];

function Charts() {
  const [selectedIndicators, setSelectedIndicators] = useState([]);
  const [fileUploaded, setFileUploaded] = useState(false);  // Para controlar el estado de la subida de archivos

  const indicatorsOptions = Object.keys(data);

  // Manejar el cambio de selección de los indicadores
  const handleSelectChange = (event) => {
    const { options } = event.target;
    const selected = [];
    for (let i = 0, len = options.length; i < len; i++) {
      if (options[i].selected) {
        selected.push(options[i].value);
      }
    }
    setSelectedIndicators(selected);
  };

  // Simular la subida de un archivo
  const handleFileUpload = (event) => {
    event.preventDefault();
    // Simular una subida de archivo
    setFileUploaded(true);  // Marcar el archivo como "subido"
    setTimeout(() => {
      setFileUploaded(false);  // Después de unos segundos, ocultar el mensaje
    }, 3000);
  };

  // Datos para el gráfico de líneas
  const lineChartData = {
    labels: years,
    datasets: selectedIndicators.map((indicator, index) => ({
      label: indicator,
      data: data[indicator],
      borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`,
      backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.2)`,
      fill: true,
    })),
  };

  // Datos para el gráfico de radar
  const radarChartData = {
    labels: selectedIndicators.length > 0 ? selectedIndicators : ['Razón Corriente', 'Prueba Ácida', 'Rotación de Inventarios', 'Endeudamiento'],
    datasets: [
      {
        label: '2020',
        data: selectedIndicators.length > 0 ? selectedIndicators.map(indicator => data[indicator][0]) : [1.4, 1.1, 3.0, 0.6],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointRadius: 5, // Aumentar el tamaño de los puntos
        borderWidth: 2,  // Hacer más gruesa la línea
      },
      {
        label: '2021',
        data: selectedIndicators.length > 0 ? selectedIndicators.map(indicator => data[indicator][1]) : [1.5, 1.2, 3.2, 0.7],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointRadius: 5,
        borderWidth: 2,
      },
      {
        label: '2022',
        data: selectedIndicators.length > 0 ? selectedIndicators.map(indicator => data[indicator][2]) : [1.6, 1.3, 3.4, 0.8],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointRadius: 5,
        borderWidth: 2,
      },
    ],
  };

  // Opciones para ambos gráficos, incluyendo el fondo personalizado
  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false, // Ajusta el gráfico al contenedor sin estirarlo
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#ffffff', // Cambia el color de las etiquetas de la leyenda
        },
      },
    },
    layout: {
      backgroundColor: '#1a1a1d', // Fondo oscuro personalizado
    },
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false, // Ajusta el gráfico al contenedor sin estirarlo
    scales: {
      r: {
        beginAtZero: true,
        angleLines: {
          color: 'rgba(255, 255, 255, 0.3)', // Líneas que conectan el centro con los puntos
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Color de las líneas de la cuadrícula
        },
        pointLabels: {
          font: {
            size: 14,
            family: 'Arial', // Cambiar la fuente
            weight: 'bold',
          },
          color: '#ffffff', // Color de las etiquetas
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 14,
            family: 'Arial',
          },
          color: '#ffffff', // Cambiar el color de las etiquetas de la leyenda
        },
      },
      title: {
        display: true,
        text: 'Análisis Comparativo de Indicadores Financieros (Radar)',
        font: {
          size: 18,
          family: 'Arial',
        },
        color: '#ffffff', // Color del título
      },
    },
    layout: {
      backgroundColor: '#1a1a1d', // Fondo oscuro personalizado para el gráfico de radar
    },
  };

  return (
    <div className="chart-container">
      
      {/* Mover el formulario de subida de archivos aquí y centrarlo */}
      <div className="file-upload-container">
        <form onSubmit={handleFileUpload}>
          <input type="file" />
          <button type="submit">Subir Archivo</button>
        </form>
        {fileUploaded && <p className="file-uploaded-message">Archivo subido correctamente (Resultados predeterminados)</p>}
      </div>

      {/* Título de Resultados de Indicadores Financieros */}
      <h3>Resultados de Indicadores Financieros</h3>

      <select multiple={true} onChange={handleSelectChange} className="select-indicators">
        {indicatorsOptions.map((indicator, index) => (
          <option key={index} value={indicator}>
            {indicator}
          </option>
        ))}
      </select>

      {/* Gráfico de líneas */}
      <div className="chart-wrapper">
        <h4>Gráfico de Líneas</h4>
        <Line data={lineChartData} options={lineOptions} />
      </div>

      {/* Gráfico de radar */}
      <div className="chart-wrapper">
        <h4>Gráfico de Radar</h4>
        <Radar data={radarChartData} options={radarOptions} />
      </div>

      <style jsx>{`
        .select-indicators {
          width: 100%;
          max-width: 400px;
          margin-bottom: 20px;
          padding: 10px;
        }
        .chart-container {
          margin: 40px 0;
        }
        .chart-wrapper {
          width: 100%;
          max-width: 600px;
          height: 300px;
          margin-bottom: 40px;
        }
        .file-upload-container {
          text-align: center; /* Centrar el formulario de subida de archivos */
          margin-bottom: 20px;
        }
        .file-uploaded-message {
          color: #4caf50;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}

export default Charts;