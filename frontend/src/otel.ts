import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { ConsoleSpanExporter, SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { trace } from '@opentelemetry/api';

const provider = new WebTracerProvider();
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
provider.register();

/**
 * OpenTelemetry tracer for the NextGenDAP frontend.
 * @example
 * const span = tracer.startSpan('UserAction');
 * span.end();
 */
export const tracer = trace.getTracer('nextgen-dap-frontend'); 