import { NextResponse } from 'next/server';

export async function GET() {
  const healthData = {
    status: 'healthy',
    service: 'HA Labs Engineering Platform',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    environment: process.env.NODE_ENV || 'production',
    system: {
      platform: 'cloud-native',
      nodeVersion: process.version,
      memoryUsage: process.memoryUsage(),
    },
    integrations: {
      database: 'PostgreSQL-ready',
      storage: 'AWS S3-ready',
      telemetry: 'MQTT / WebSockets ready',
      auth: 'JWT session ready'
    }
  };

  return NextResponse.json(healthData, {
    status: 200,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Content-Type': 'application/json',
    },
  });
}
