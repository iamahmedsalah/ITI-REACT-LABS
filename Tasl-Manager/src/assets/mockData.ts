
export const teamMembers = [
  {
    id: '1',
    name: 'Alex Chen',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzjhRkqHnWCV2zYZTsLJbQBw5XrNY9W8DpA07NX1yyfDDK4wAMw11NPDHXtoQi7iB49_eYMs69J18wFSiBhYK8T0sO9N19GPdKmWBlkBou55vJC4rKlY7rFrBd0QQZNp_mUUTLmBwJrZA2pqamOB3_5IjzVnJtGAlcb7AVT51EHG87NPqdznGexPbekQ8YCHRxgYdp2E1VJAFobmNOe-Ois85KsJPqz5KBoQjB_8pcTZ-TVzsgynqWXBMO-s2n2tIpE7mIMij-okI',
    role: 'Lead Architect'
  },
  {
    id: '2',
    name: 'Jordan Smith',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChTuy96Yms10f-Vl3CmaHOTz2OpI4g5tcPa_sx0-oZctT9EbrLD7CwnWHwC9K-BjWt6x3Mt_U7IMDS_lp1qwCMrnAP7igMIv7-JtdNv6isbwCUNxOY9F0XxRNUrVo8WN1w8K6-Pi4n-lYn1cn-25h5lucwYf1GlxLi6ukhtAcKFgZVG_KjgXnB2MhbKlkklVwfMSKKn-pxymWTIVDJrVn5R5j-Np4phlOgSi-XiRyqwj7y8iEPInuXcI2stJ5qQAdBF0pbVM1PbNo',
    role: 'UI/UX Designer'
  },
  {
    id: '3',
    name: 'Sarah Miller',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB35Y98F8LkOZ7k8aWAW49Zh8w-aouXT9WUCC3E33EXIWlCcAyGDQJgyTqPsWdsT4ToWw5mzaISu2nT1jAKaX2ZP_tI-1LL1Dpl2u8APrZJvMpF1AXlUY7ZX5JRutky6v0P5MLSpEiH6McVEgr-AcKUBihawbdfDmyMZlf6V5mZI344a7Zh7FfAnnMdqnKbEl26DdaH-D51HAweIVVjEjBKeyWEZQseaL7QfagyavqtMe5YF25ZRC_TsTLkxa4zXGgzVY3sJkGOzmU',
    role: 'Backend Engineer'
  }
];

export const projects = [
  {
    id: 'p1',
    name: 'Hyper-Towers',
    domain: 'District 9',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3oaYB7E6H4M18qnDTd3iiPYNvpCwp4F6h-r8_FWjVRiuv4WcQ84spQdLCjvSlHg_El8m5GYxR-BlUXHnRcCIAtNy3sUkWX9TZQYLP31_WsyuqN2GkQL99JSfYr5NAxy_OUSVhRRsRl8FHU1t0EQvBbnvU5IEXSHswnD6htgDNHFxAR0X0kf0cicJihvTDEpmrRpRUM7NBNMddZOK2E3QgrZfvl0nkAFOC4nLktb4dsfDDbTRCMgWPErYe2rFOrlqqKUMoqGaoBis'
  },
  {
    id: 'p2',
    name: 'Cloud Garden',
    domain: 'Zenith',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEaob8Kd2rK0P0mrovnuXz5Bfrh6FvKqXgotvahKasqMc4azWh3KHYZIjbjS77uGHB1R19xb8w4ojMOmJLoAl5lPGW6zac6nnYvkxcRSo9kBQmUVYELHQGt3aIoyWKjmfjqs1iRI9ZTu-E6zcK0RpFDVCYdK6i_zEmHoRgboMW1slccrmAnpVr_dGk6_-eF6C-xfYfA2SIpefe6YV7K3t8MCjjMULHm_IW4TITBx-ESsjqGS5dTPr7b68YQUwrY7ZH3Mj-fy6YOpI'
  }
];

export const milestones = [
  {
    id: 'm1',
    title: 'Neural Mesh Optimization',
    project: 'Void Framework',
    date: 'MAR 24',
    status: 'SUCCESS',
    type: 'neural'
  },
  {
    id: 'm2',
    title: 'Blueprint Consensus Achieved',
    project: 'Horizon Nexus',
    date: 'MAR 21',
    status: 'VERIFIED',
    type: 'blueprint'
  },
  {
    id: 'm3',
    title: 'Legacy Deck Refactoring',
    project: 'Internal Maintenance',
    date: 'MAR 18',
    status: 'ARCHIVED',
    type: 'legacy'
  }
];
export const tasks = [
  {
    id: 't1',
    title: 'Neural Mesh Infrastructure Redesign',
    project: 'Void Framework',
    priority: 'Critical',
    status: 'In Progress',
    dueDate: 'Oct 24, 2024',
    sprint: 'Sprint 12',
    objective: 'Redesign the underlying data ingestion pipelines to support real-time telemetry from edge nodes. Focus on reducing latency by 40% using the new Ethereal schema protocol. All existing legacy endpoints must remain backwards compatible during the migration phase.',
    subtasks: [
      { id: 's1', title: 'Audit existing GraphQL resolvers for performance bottlenecks', completed: true },
      { id: 's2', title: 'Draft new schema architecture for edge nodes', completed: true },
      { id: 's3', title: 'Implement Kafka-based message queuing for ingestion buffer', completed: false },
      { id: 's4', title: 'Conduct stress tests on the new Ethereal schema', completed: false }
    ],
    attachments: [
      { id: 'a1', name: 'Architecture_V2_Draft.pdf', size: '2.4 MB', type: 'PDF', url: '#' },
      { id: 'a2', name: 'Infrastructure_Model.png', size: '850 KB', type: 'Image', url: '#', previewUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASeeoWs167BRQIIVjH14944jJwLY6Ddb41t2AREgo6OknoMifm39aW895lQKLQ487R3LFxusMaGJ9_qTiyEBSwMCHmuVTucv6-W4tf8flPtNUItzLAcvtcKY4aGFJ_zTV1yymSRSckiDOZ2pCDuGaPyIxKqRWftlzrZZCkMoEa1-KbGD5rurP1ZSPLza_4onJuLGVU7LpMg6_bd9NtmuDbM72H74OrEVRFYTgzQW7Ht4mISkyCG02HPsK5G80G8zbjs7GUE9I4-yA' }
    ],
    activityLog: [
      { id: 'l1', user: 'Alex Chen', action: 'updated the status to In Progress', timestamp: 'Today, 10:45 AM', type: 'status' },
      { id: 'l2', user: 'Jordan Smith', action: 'attached Architecture_V2_Draft.pdf', timestamp: 'Yesterday, 4:20 PM', type: 'attachment' },
      { id: 'l3', user: 'System', action: 'created this task from Project Alpha Template', timestamp: 'Oct 21, 11:30 AM', type: 'system' }
    ],
    assignedSquad: teamMembers
  },
  {
    id: 't2',
    title: 'Design System Architecture Refresh',
    project: 'Ethereal UI v2.0',
    priority: 'Critical',
    status: 'In Progress',
    dueDate: 'Oct 24, 2023',
    sprint: 'Sprint 11',
    objective: 'Refresh the design system architecture to support multi-dimensional layouts.',
    subtasks: [],
    attachments: [],
    activityLog: [],
    assignedSquad: [teamMembers[0]]
  },
  {
    id: 't3',
    title: 'Technical Documentation - API Layer',
    project: 'Backend Foundation',
    priority: 'Medium',
    status: 'Queued',
    dueDate: 'Oct 26, 2023',
    sprint: 'Sprint 11',
    objective: 'Document the API layer for the backend foundation.',
    subtasks: [],
    attachments: [],
    activityLog: [],
    assignedSquad: [teamMembers[2]]
  },
  {
    id: 't4',
    title: 'Stakeholder Review - Sprint 04',
    project: 'Growth Strategy',
    priority: 'High',
    status: 'Review',
    dueDate: 'Tomorrow',
    sprint: 'Sprint 12',
    objective: 'Review the sprint 04 progress with stakeholders.',
    subtasks: [],
    attachments: [],
    activityLog: [],
    assignedSquad: [teamMembers[0], teamMembers[1]]
  }
];



