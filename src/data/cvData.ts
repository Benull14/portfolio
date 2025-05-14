export type TimelineItem = {
  id: number;
  title: string;
  location: string;
  description: string;
  date: string;
  icon: string;
  category: 'education' | 'experience';
};

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: 'Bachelor in Applied Computer Science',
    location: 'HAW Hamburg',
    description: 'focusOnComputerScience',
    date: '2016 - 2020',
    icon: 'graduation-cap',
    category: 'education'
  },
  {
    id: 2,
    title: 'Commercial Assistant - Information Processing',
    location: 'Vocational School',
    description: 'commercialInformationTech',
    date: '2014 - 2016',
    icon: 'book',
    category: 'education'
  },
  {
    id: 3,
    title: 'AEVO Certificate - Certified Trainer',
    location: 'German Chamber of Commerce',
    description: 'certifiedTrainer',
    date: '2018',
    icon: 'award',
    category: 'education'
  },
  {
    id: 4,
    title: 'IT Lecturer',
    location: 'Education Center',
    description: 'teachingITCourses',
    date: '2019 - 2020',
    icon: 'presentation',
    category: 'experience'
  },
  {
    id: 5,
    title: 'IT Developer',
    location: 'Various Projects',
    description: 'fullStackDevelopment',
    date: '2018 - Present',
    icon: 'code',
    category: 'experience'
  },
  {
    id: 6,
    title: 'Project Manager',
    location: 'Agile Teams',
    description: 'scrumProjectManagement',
    date: '2020 - Present',
    icon: 'git-branch',
    category: 'experience'
  }
];