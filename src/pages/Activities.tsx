import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Cpu, 
  Beaker, 
  Lightbulb, 
  Trophy, 
  Users,
  ArrowRight,
  Target,
  Brain,
  Rocket
} from "lucide-react";
import { Link } from "react-router-dom";

const Activities = () => {
  const activityCategories = [
    {
      icon: Code,
      title: "소프트웨어",
      subtitle: "Software Development",
      description: "웹, 앱, AI/ML 등 다양한 소프트웨어 프로젝트",
      color: "bg-blue-500",
      projects: [
        {
          name: "스마트 학습 플랫폼",
          tech: ["React", "Node.js", "AI"],
          description: "개인 맞춤형 학습 관리 시스템"
        },
        {
          name: "학교 생활 앱",
          tech: ["Flutter", "Firebase"],
          description: "학생들을 위한 종합 정보 앱"
        }
      ]
    },
    {
      icon: Cpu,
      title: "하드웨어",
      subtitle: "Hardware Development", 
      description: "임베디드 시스템, IoT, 로보틱스 개발",
      color: "bg-purple-500",
      projects: [
        {
          name: "스마트 교실 시스템",
          tech: ["Arduino", "Raspberry Pi", "IoT"],
          description: "자동화된 교실 환경 제어 시스템"
        },
        {
          name: "로봇 프로젝트",
          tech: ["C++", "센서", "모터"],
          description: "자율주행 및 음성인식 로봇"
        }
      ]
    },
    {
      icon: Beaker,
      title: "자연과학",
      subtitle: "Natural Science",
      description: "데이터 사이언스, 연구 프로젝트",
      color: "bg-teal-500",
      projects: [
        {
          name: "환경 데이터 분석",
          tech: ["Python", "R", "통계"],
          description: "지역 환경 변화 모니터링 프로젝트"
        },
        {
          name: "학습 패턴 연구",
          tech: ["데이터마이닝", "시각화"],
          description: "효과적인 학습 방법 연구"
        }
      ]
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "대회 참가",
      description: "각종 프로그래밍 대회 및 과학 경진대회 참가",
      stats: "연간 15+ 대회"
    },
    {
      icon: Users,
      title: "팀 프로젝트",
      description: "다양한 분야의 협업 프로젝트 진행",
      stats: "진행 중 23개"
    },
    {
      icon: Lightbulb,
      title: "혁신 아이디어",
      description: "창의적이고 실용적인 솔루션 개발",
      stats: "특허 출원 5건"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 font-pretendard">
              <Rocket className="w-4 h-4 mr-2" />
              Our Activities
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent font-pretendard">
              우리의 활동
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-pretendard font-light">
              다양한 프로젝트와 활동을 통해 실력을 키우고 꿈을 실현해나갑니다.
            </p>
          </div>
        </div>
      </section>

      {/* Activity Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {activityCategories.map((category, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 border-0">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`w-20 h-20 ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <category.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-center">
                    <h3 className="text-2xl font-bold mb-2 font-pretendard">{category.title}</h3>
                    <p className="text-sm text-muted-foreground font-pretendard font-light">{category.subtitle}</p>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground mb-6 font-pretendard font-light">
                    {category.description}
                  </p>
                  
                  <div className="space-y-4">
                    {category.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 font-pretendard">{project.name}</h4>
                        <p className="text-sm text-muted-foreground mb-3 font-pretendard font-light">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs font-pretendard">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-pretendard">활동 성과</h2>
            <p className="text-xl text-muted-foreground font-pretendard font-light">우리가 이룬 성과들</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300 border-0">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-pretendard">{achievement.title}</h3>
                  <p className="text-muted-foreground mb-4 font-pretendard font-light">{achievement.description}</p>
                  <div className="text-2xl font-bold text-finder-blue font-pretendard">{achievement.stats}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-gradient-hero rounded-2xl p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-pretendard">함께 프로젝트를 만들어보세요</h2>
              <p className="text-xl mb-8 opacity-90 font-pretendard font-light">
                다양한 분야의 프로젝트에 참여하여 실력을 키우고 
                동료들과 함께 성장할 수 있습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild className="bg-white text-finder-navy hover:bg-white/90 font-pretendard">
                  <Link to="/apply">
                    지원하기
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-finder-navy font-pretendard">
                  <Link to="/members">
                    멤버 보기
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;