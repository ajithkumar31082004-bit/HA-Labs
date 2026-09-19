import { NextRequest, NextResponse } from 'next/server';
import { PROJECTS_DATA } from '@/data/projects';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { searchParams } = new URL(request.url);
  const fileType = searchParams.get('fileType') || 'code';
  const projectId = params.id;

  const project =
    PROJECTS_DATA.find((p) => p.id === projectId || p.slug === projectId) ||
    PROJECTS_DATA[0];

  const fileMap: Record<string, { filename: string; size: string; mime: string; sha256: string }> = {
    code: {
      filename: `${project.slug}_firmware_v1.2.zip`,
      size: '14.2 MB',
      mime: 'application/zip',
      sha256: 'a8f7b9c24150de3f9821d37b019ac4052f58',
    },
    pcb: {
      filename: `${project.slug}_circuit_pcb.kicad`,
      size: '3.8 MB',
      mime: 'application/octet-stream',
      sha256: '71d99e034c562e841aa991b105dca48412c1',
    },
    report: {
      filename: `${project.slug}_ieee_report_final.docx`,
      size: '8.4 MB',
      mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      sha256: 'e5519b389cb43f11072dfca718b5569421de',
    },
    ppt: {
      filename: `${project.slug}_viva_defense_slides.pptx`,
      size: '18.5 MB',
      mime: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      sha256: '49aa8c614b0351d1f044bb7123aa1289cf30',
    },
    sql: {
      filename: `${project.slug}_database_schema.sql`,
      size: '1.2 MB',
      mime: 'text/plain',
      sha256: '03ba72e9dfa38210344c27891fa12056cd81',
    },
    bom: {
      filename: `${project.slug}_bill_of_materials.xlsx`,
      size: '420 KB',
      mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      sha256: '99bf01c2384a2981da4f0528ac114389dd82',
    },
  };

  const selectedFile = fileMap[fileType] || fileMap.code;

  return NextResponse.json({
    status: 'success',
    projectId: project.id,
    projectTitle: project.title,
    deliverable: selectedFile,
    downloadToken: `tok_sec_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
    expiresInSeconds: 3600,
    license: {
      type: 'Single-Team Academic License',
      allowedUse: 'Semester examination and laboratory defense',
      authorizedBy: 'HA Labs Engineering Inc.',
    },
  });
}
