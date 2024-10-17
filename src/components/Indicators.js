import React from 'react';
import './Indicators.css';

const indicatorsData = {
  liquidity: [
    {
      name: 'Razón Corriente',
      value: 0,
      description: 'Capacidad de la empresa para pagar deudas de corto plazo.'
    },
    {
      name: 'Prueba Ácida',
      value: 0,
      description: 'Capacidad de la empresa para pagar deudas sin contar inventarios.'
    },
    {
      name: 'Prueba Defensiva',
      value: 0,
      description: 'Mide la solvencia sin depender de los flujos de venta'
    },
    {
      name: 'Capital de Trabajo',
      value: 0,
      description: 'Representa lo que queda a la empresa después de pagar sus deudas inmediatas'
    }
  ],
  activity: [
    {
      name: 'Rotación de Inventarios',
      value: 0,
      description: 'Número de veces que el inventario es vendido y reemplazado.'
    },
    {
      name: 'Rotación de cartera',
      value: 0,
      description: 'Número de días en que tarda la empresa en recuperar el dinero de las CXC'
    },
    {
      name: 'Rotación de CXP a Proveedores',
      value: 0,
      description: 'Número de días en que tarda la empresa en pagarle a los proveedores'
    },
    {
      name: 'Ciclo de Efectivo',
      value: 0,
      description: 'Tiempo que tarda una empresa en convertir sus inversiones en efectivo.'
    },
  ],
  debt: [
    {
      name: 'Nivel de Endeudamiento',
      value: 0,
      description: 'Proporción de deuda en relación con los activos totales.'
    },
    {
      name: 'Estructura del Capital',
      value: 0,
      description: 'Impacto del pasivo total con relación al patrimonio.'
    },
    {
      name: 'Cobertura de Gastos de Intereses',
      value: 0,
      description: 'Cuánto pueden disminuir las utilidades de una empresa sin afectar su capacidad para pagar gastos financieros.'
    },
  ],
  profitability: [
    {
      name: 'ROE',
      value: 0,
      description: 'Mide la rentabilidad de los fondos aportados por el inversionista.'
    },
    {
      name: 'ROA',
      value: 0,
      description: 'Mide la rentabilidad del negocio como proyecto independiente de los accionistas.'
    },
    {
      name: 'Margen Bruto',
      value: 0,
      description: 'Indica las ganancias en relación con las ventas, deducido los costos de producción de los bienes vendidos'
    },
    {
      name: 'Margen Neto',
      value: 0,
      description: 'Mide la relación entre la utilidad líquida y las ventas netas, indicando el porcentaje de cada unidad de venta que queda tras deducir todos los gastos e impuestos'
    },
    {
      name: 'Margen EBITDA',
      value: 0,
      description: 'Indica cuántos pesos de ventas se convierten en ganancias operativas, reflejando la eficiencia operativa de la empresa.'
    }
  ],
};

function Indicators() {
  return (
    <div className="indicators-container">
      <h3>Resultados de Indicadores Financieros</h3>
      
      <div className="indicator-category">
        <h4>Indicadores de Liquidez</h4>
        <div className="flashcards">
          {indicatorsData.liquidity.map((indicator, index) => (
            <div key={index} className="indicator-card">
              <h5>{indicator.name}</h5>
              <p>{indicator.value}</p>
              <p>{indicator.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="indicator-category">
        <h4>Indicadores de Actividad</h4>
        <div className="flashcards">
          {indicatorsData.activity.map((indicator, index) => (
            <div key={index} className="indicator-card">
              <h5>{indicator.name}</h5>
              <p>{indicator.value}</p>
              <p>{indicator.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="indicator-category">
        <h4>Indicadores de Endeudamiento</h4>
        <div className="flashcards">
          {indicatorsData.debt.map((indicator, index) => (
            <div key={index} className="indicator-card">
              <h5>{indicator.name}</h5>
              <p>{indicator.value}</p>
              <p>{indicator.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="indicator-category">
        <h4>Indicadores de Rentabilidad</h4>
        <div className="flashcards">
          {indicatorsData.profitability.map((indicator, index) => (
            <div key={index} className="indicator-card">
              <h5>{indicator.name}</h5>
              <p>{indicator.value}</p>
              <p>{indicator.description}</p>
            </div>
          ))}
        </div>
      </div>



    </div>
  );
}

export default Indicators;