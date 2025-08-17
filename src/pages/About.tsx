import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Trophy, Calendar } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "목표 지향",
      description: "명확한 목표 설정과 체계적인 접근으로 성과를 달성합니다."
    },
    {
      icon: Users,
      title: "팀워크",
      description: "서로 협력하며 함께 성장하는 문화를 만들어갑니다."
    },
    {
      icon: Trophy,
      title: "우수성",
      description: "항상 최고를 추구하며 지속적으로 발전합니다."
    },
    {
      icon: Calendar,
      title: "지속성",
      description: "2011년부터 축적된 노하우와 전통을 이어갑니다."
    }
  ];

  const activities = [
    {
      category: "학술 활동",
      items: ["정기 세미나", "프로젝트 연구", "논문 스터디", "학회 참가"]
    },
    {
      category: "네트워킹",
      items: ["동문 멘토링", "타 대학 교류", "산업체 견학", "전문가 특강"]
    },
    {
      category: "실무 경험",
      items: ["현장 실습", "인턴십 연계", "포트폴리오 개발", "경진대회 참가"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Est. 2011
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              FINDER 소개
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              13년의 역사와 전통을 자랑하는 대학교 최고의 동아리입니다. 
              지속적인 성장과 혁신을 통해 1등 동아리의 위치를 유지하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-finder-blue">미션</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  학술적 탁월성과 실무 역량을 갖춘 인재 양성을 통해 
                  사회에 기여하는 리더를 육성합니다.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-finder-blue">비전</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  지속적인 혁신과 성장을 바탕으로 업계 최고의 
                  동아리로서의 위치를 공고히 하겠습니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">핵심 가치</h2>
            <p className="text-xl text-muted-foreground">FINDER를 이끌어가는 4가지 핵심 가치입니다</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">주요 활동</h2>
            <p className="text-xl text-muted-foreground">다양한 분야에서 진행되는 FINDER의 핵심 활동들</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {activities.map((activity, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-finder-blue">{activity.category}</h3>
                  <ul className="space-y-2">
                    {activity.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-finder-blue rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">FINDER 역사</h2>
            <p className="text-xl text-muted-foreground">2011년부터 현재까지의 주요 성과와 발전사</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { year: "2011", title: "FINDER 동아리 창립", description: "대학교 내 최초의 전문 학술 동아리로 출발" },
                { year: "2015", title: "첫 대외 수상", description: "전국 대학생 경진대회 최우수상 수상" },
                { year: "2018", title: "산학협력 확대", description: "주요 기업들과의 멘토링 프로그램 시작" },
                { year: "2021", title: "디지털 전환", description: "온라인 플랫폼을 통한 활동 영역 확장" },
                { year: "2024", title: "1등 동아리 인증", description: "대학교 공식 1등 동아리로 선정" }
              ].map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;