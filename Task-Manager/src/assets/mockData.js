
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
  }
];



