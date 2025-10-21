---
title: ADC
aliases:
  - ADC
tags:
  - 9noSemestre
  - electronica
---

## CONVERSIÓN ANALÓGICA-DIGITAL (ADC)
Un convertidor ADC toma un voltaje de entrada analógico y después de cierto
tiempo produce un código digital de N bits que representa a la 
entrada analógica. Varios tipos de ADC's utilizan un DAC como parte 
de los circuitos internos de conversión.

En la figura siguiente se muestra un convertidor ADC básico.
![[ADC.jpg]]

![[rampadigital.jpg]]
El contador sigue contando hasta que VAX supere a VA  y en ese momento el contador se detiene.
![[ADC-rampa.jpg]]
El valor en el que VAX supere a VA se le conoce como voltaje de umbral (VT) por lo general del orden de 10 a 100 µV.

20 de octubre de 2025

## Resolución y precisión A/D
Es muy importante comprender los errores asociados con la realización de cualquier tipo de mediciones.

Al reducir el tamaño del escalón podemos reducir el error potencial, pero s**iempre habrá una diferencia entre la cantidad real (analógica) y el valor digital que se le asigne.**
**A esto se le conoce como error de cuantización.** Por lo tanto, Vax es una aproximación al valor de Va y lo mejor que podemos esperar es que Vax se encuentre dentro de un intervalo menor a 10mV de Va si la resolución (tamaño del escalón) es de 10mV.
Este **error de cuantización**, que **puede reducirse si se incrementa el número de bits en el contador y en el DAC, se especifica algunas veces como un error de +1LSB**, lo cual indica que el resultado podría desplazarse por un valor máximo equivalente a la ponderación del LSB.

La precisión se especifica como 
±n LSB (n=±1/4)  (LSB - BIT MENOS SIGNIFICATIVO)
Por ejemplo:
±1/4 LSB significa que si la resolución del LSB = 10mV una precisión ±1/4(10mV)

10mV/4 = 2.5mV 
- (10+2.5)mV=12.5mV
- (10-2.5)mV=7.5mV

## Tiempo de conversión tc
Es el tiempo entre el final del pulso INICIO y la activación de la salida EOC.
El contador empieza a contar desde cero y avanza en forma ascendente hasta que Vax se excede de Va, punto en el cual EOC cambia a BAJO para finalizar el proceso de conversión tc depende de Va.

Un valor más grande requerirá más escalones antes de que el voltaje de la escalera exceda a Va.
El tiempo máximo de conversión ocurrir+a cuando Va se encuentre justo debajo de la escala completa, de manera que Vax deberá avanzar hasta el último intervalo para activar a EOC.
Para un convertidor de N bits, esto será:
<center>tc(máx)=(2^n-1)ciclos de reloj</center>
Por ejemplo, el ADC en el ejemplo 11-12 tendría un tiempo máximo de conversión de:
<center>tc(máx)=(2^10-1)x1ms=1023ms</center>

Para una frecuencia de reloj 
F=1MHz, periodo T= 1/1MHz = 1ms

Algunas veces se especifica el tiempo de conversión promedio; éste equivale a la mitad del tiempo máximo de conversión. Para el convertidor de rampa digital, esto sería:
<center>tc(prom)= tc(máx)/2 = 2^N-1 ciclos de reloj</center>

La principal desventaja del método de rampa digital es que, el tiempo de conversión se duplica por cada bit que se agrega al contador, por lo que la resolución sólo puede mejorarse a costa de un tc más largo. 

Esto hace que este tipo de ADC sea inadecuado para aplicaciones en las que deban realizarse conversiones A/D repetitivas de una señal analógica que cambie con mucha rapidez. No obstante, para las aplicaciones de baja velocidad la relativa simpleza del convertidor de rampa digital es una ventaja en comparación con los ADCs más complejos de mayor velocidad 
Para señales de baja frecuencia se aplica el adc de rampa digital.

## ADC DE APROXIMACIONES SUCESIVAS
Es uno de los tipos de ADC más utilizados.
Tiene circuitos más complejos que el ADC  de rampa digital, pero un tiempo de conversión mucho más corto.

El SAC no utiliza un contador para proporcionar la entrada al bloque del DAC, sino que utiliza un registro. La lógica de control modifica el contenido del registro bit por bit, hasta que los datos del registro sean el equivalente digital de la entrada analógica Va dentro de la resolución del convertidor.