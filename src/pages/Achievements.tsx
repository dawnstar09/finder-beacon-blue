import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Star, TrendingUp, Users } from "lucide-react";

const Achievements = () => {
  const stats = [
    { icon: Trophy, label: "총 수상 횟수", value: "47회", color: "text-yellow-500" },
    { icon: Medal, label: "대상/최우수상", value: "15회", color: "text-finder-blue" },
    { icon: Users, label: "배출 인재", value: "200+명", color: "text-green-500" },
    { icon: TrendingUp, label: "취업률", value: "95%", color: "text-purple-500" }
  ];

  const awards = [
    {
      year: "2024",
      title: "전국 대학생 혁신 경진대회",
      rank: "대상",
      organizer: "교육부",
      description: "AI 기반 학습 플랫폼 개발 프로젝트로 전국 1위 달성"
    },
    {
      year: "2023",
      title: "대학생 창업 아이디어 공모전",
      rank: "최우수상",
      organizer: "중소벤처기업부",
      description: "혁신적인 비즈니스 모델로 창업 부문 최고상 수상"
    },
    {
      year: "2023",
      title: "학술 논문 발표 대회",
      rank: "우수상",
      organizer: "한국학술진흥재단",
      description: "연구 성과의 우수성을 인정받아 학술 분야 수상"
    },
    {
      year: "2022",
      title: "대학 동아리 평가",
      rank: "1등 동아리",
      organizer: "대학교",
      description: "종합 평가에서 전체 동아리 중 1위로 선정"
    },
    {
      year: "2022",
      title: "산학협력 프로젝트",
      rank: "최우수상",
      organizer: "대한상공회의소",
      description: "기업과의 협력 프로젝트에서 뛰어난 성과 달성"
    },
    {
      year: "2021",
      title: "대학생 연구 발표회",
      rank: "우수상",
      organizer: "교육부",
      description: "코로나19 시대 온라인 교육 혁신 연구로 수상"
    }
  ];

  const achievements = [
    {
      category: "학술 성과",
      items: [
        "SCI 논문 게재 12편",
        "국내 학술지 논문 35편",
        "국제 학회 발표 28회",
        "특허 출원 7건"
      ]
    },
    {
      category: "대외 활동",
      items: [
        "기업 인턴십 연계 95%",
        "해외 교환 프로그램 참여 45명",
        "봉사활동 누적 2,400시간",
        "산학협력 프로젝트 23건"
      ]
    },
    {
      category: "네트워킹",
      items: [
        "동문 네트워크 200+ 명",
        "멘토-멘티 프로그램 운영",
        "타 대학 교류 15개교",
        "산업체 파트너십 12개사"
      ]
    }
  ];

  const getRankColor = (rank: string) => {
    if (rank === "대상") return "bg-yellow-500";
    if (rank === "최우수상") return "bg-finder-blue";
    if (rank === "우수상") return "bg-green-500";
    if (rank === "1등 동아리") return "bg-purple-500";
    return "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <Trophy className="w-4 h-4 mr-2" />
              우수 성과
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              FINDER 실적
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              13년간 축적된 FINDER의 뛰어난 성과와 수상 실적을 소개합니다.
              지속적인 노력과 혁신을 통해 달성한 성과들입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-primary`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Major Awards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">주요 수상 실적</h2>
            <p className="text-xl text-muted-foreground">FINDER가 달성한 주요 대회 및 공모전 수상 실적</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {awards.map((award, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-grow">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge className={`${getRankColor(award.rank)} text-white`}>
                          {award.rank}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{award.year}</span>
                        <span className="text-sm text-muted-foreground">• {award.organizer}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                      <p className="text-muted-foreground">{award.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <Award className="w-12 h-12 text-finder-blue" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">세부 성과</h2>
            <p className="text-xl text-muted-foreground">다양한 분야에서 달성한 구체적인 성과들</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-finder-blue">
                    <Star className="w-5 h-5 mr-2" />
                    {achievement.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {achievement.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-finder-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">대외 인정</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardContent className="p-8 text-center">
                  <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">대학교 공식 1등 동아리</h3>
                  <p className="text-muted-foreground">
                    전체 동아리 중 종합 평가 1위로 선정되어 
                    대학교 공식 인증을 받았습니다.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-8 text-center">
                  <Medal className="w-16 h-16 text-finder-blue mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">우수 동아리 상</h3>
                  <p className="text-muted-foreground">
                    3년 연속 우수 동아리로 선정되어 
                    지속적인 우수성을 인정받았습니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;