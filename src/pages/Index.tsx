import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Trophy, 
  Users, 
  Calendar, 
  ArrowRight, 
  Award, 
  Target,
  BookOpen,
  MessageCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const stats = [
    { icon: Trophy, label: "수상 실적", value: "47회", description: "다양한 대회에서의 우수한 성과" },
    { icon: Users, label: "현재 멤버", value: "24명", description: "열정적인 동아리 구성원" },
    { icon: Calendar, label: "운영 기간", value: "13년", description: "2011년부터 지속된 전통" },
    { icon: Award, label: "취업률", value: "95%", description: "우수한 진로 개발 성과" }
  ];

  const highlights = [
    {
      icon: Target,
      title: "목표 지향적 활동",
      description: "체계적인 계획과 실행으로 확실한 성과를 만들어갑니다.",
      color: "bg-blue-500",
      link: "/about"
    },
    {
      icon: BookOpen,
      title: "실무 중심 학습",
      description: "이론과 실무를 결합한 실질적인 역량 개발을 추구합니다.",
      color: "bg-purple-500",
      link: "/achievements"
    },
    {
      icon: MessageCircle,
      title: "네트워킹",
      description: "선배 멘토링과 타 학교 연계로 성장 기회를 제공합니다.",
      color: "bg-teal-500",
      link: "/members"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 font-pretendard">
            <Calendar className="w-4 h-4 mr-2" />
            Est. 2011 • 고등학교 1등 동아리
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in font-pretendard">
            FINDER
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up font-pretendard font-light">
            13년의 역사와 전통을 자랑하는 고등학교 최고의 동아리입니다.
            <br />
            지속적인 성장과 혁신을 통해 우수한 인재를 양성합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button variant="hero" size="lg" asChild>
              <Link to="/apply">
                지금 지원하기
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/20 text-white border-white/30 hover:bg-white hover:text-finder-navy">
              <Link to="/about">동아리 소개</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-pretendard">숫자로 보는 FINDER</h2>
            <p className="text-xl text-muted-foreground font-pretendard font-light">지속적인 성장과 우수한 성과를 자랑합니다</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-finder-blue font-pretendard">{stat.value}</div>
                  <div className="font-semibold mb-2 font-pretendard">{stat.label}</div>
                  <div className="text-sm text-muted-foreground font-pretendard font-light">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-pretendard">왜 FINDER인가?</h2>
            <p className="text-xl text-muted-foreground font-pretendard font-light">FINDER만의 특별한 장점들을 소개합니다</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {highlights.map((highlight, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 ${highlight.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <highlight.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 font-pretendard">{highlight.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed font-pretendard font-light">{highlight.description}</p>
                  <Button variant="finder-outline" asChild className="font-pretendard">
                    <Link to={highlight.link}>
                      자세히 보기
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">최근 성과</h2>
            <p className="text-xl text-muted-foreground">FINDER의 최근 주요 성과들</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                date: "2024.03",
                title: "전국 대학생 혁신 경진대회 대상 수상",
                description: "AI 기반 학습 플랫폼 개발 프로젝트로 전국 1위 달성",
                badge: "대상"
              },
              {
                date: "2024.01",
                title: "대학교 공식 1등 동아리 선정",
                description: "종합 평가에서 전체 동아리 중 1위로 인정받음",
                badge: "1등"
              },
              {
                date: "2023.12",
                title: "창업 아이디어 공모전 최우수상",
                description: "혁신적인 비즈니스 모델로 창업 부문 최고상 수상",
                badge: "최우수상"
              }
            ].map((achievement, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-grow">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge variant="secondary">{achievement.date}</Badge>
                        <Badge className="bg-finder-blue text-white">{achievement.badge}</Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                    <Trophy className="w-12 h-12 text-yellow-500 ml-6" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="finder" size="lg" asChild>
              <Link to="/achievements">
                전체 실적 보기
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-finder-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">함께 성장할 준비가 되셨나요?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            FINDER와 함께 여러분의 가능성을 발견하고 꿈을 실현해보세요.
            최고의 동아리에서 최고의 경험을 만들어갑시다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/apply">
                지원서 작성하기
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-finder-navy">
              <Link to="/members">
                멤버 만나보기
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
