import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, FileText, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Apply = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    major: "",
    year: "",
    email: "",
    phone: "",
    motivation: "",
    experience: "",
    skills: "",
    portfolio: "",
    agreeTerms: false,
    agreePrivacy: false
  });

  const requirements = [
    {
      icon: Users,
      title: "지원 자격",
      items: [
        "재학생 또는 휴학생 (졸업생 제외)",
        "GPA 3.0 이상 (4.5 만점 기준)",
        "전공 무관 (모든 학과 지원 가능)",
        "성실하고 적극적인 활동 의지"
      ]
    },
    {
      icon: FileText,
      title: "제출 서류",
      items: [
        "온라인 지원서 작성",
        "자기소개서 및 지원동기",
        "포트폴리오 (선택사항)",
        "성적증명서 (합격 후 제출)"
      ]
    },
    {
      icon: Calendar,
      title: "모집 일정",
      items: [
        "서류 접수: 3월 1일 ~ 3월 15일",
        "1차 발표: 3월 20일",
        "면접: 3월 25일 ~ 3월 27일",
        "최종 발표: 3월 30일"
      ]
    },
    {
      icon: Clock,
      title: "활동 안내",
      items: [
        "정기 모임: 매주 수, 금 18:00-21:00",
        "세미나 및 스터디 참여",
        "프로젝트 팀 활동",
        "각종 대회 및 공모전 참가"
      ]
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [field]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 필수 항목 검증
    if (!formData.name || !formData.email || !formData.major || !formData.motivation) {
      toast({
        title: "입력 오류",
        description: "필수 항목을 모두 입력해주세요.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.agreeTerms || !formData.agreePrivacy) {
      toast({
        title: "동의 필요",
        description: "이용약관 및 개인정보처리방침에 동의해주세요.",
        variant: "destructive"
      });
      return;
    }

    // 성공 메시지
    toast({
      title: "지원서 제출 완료",
      description: "지원서가 성공적으로 제출되었습니다. 검토 후 연락드리겠습니다.",
    });

    // 폼 초기화
    setFormData({
      name: "",
      studentId: "",
      major: "",
      year: "",
      email: "",
      phone: "",
      motivation: "",
      experience: "",
      skills: "",
      portfolio: "",
      agreeTerms: false,
      agreePrivacy: false
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <Users className="w-4 h-4 mr-2" />
              2024년 신규 모집
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              FINDER 참가신청
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              최고의 동아리 FINDER와 함께 성장하고 싶은 분들을 모집합니다.
              여러분의 열정과 도전 정신을 기다리고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">모집 안내</h2>
            <p className="text-xl text-muted-foreground">지원 전 꼭 확인해주세요</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {requirements.map((req, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-finder-blue">
                    <req.icon className="w-5 h-5 mr-2" />
                    {req.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {req.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
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

      {/* Application Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-center">온라인 지원서</CardTitle>
                <p className="text-center text-muted-foreground">
                  모든 항목을 정확히 입력해주세요. 제출된 정보는 선발 과정에서만 사용됩니다.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-finder-blue">기본 정보</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">이름 *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="홍길동"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="studentId">학번 *</Label>
                        <Input
                          id="studentId"
                          value={formData.studentId}
                          onChange={(e) => handleInputChange("studentId", e.target.value)}
                          placeholder="20240001"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="major">전공 *</Label>
                        <Input
                          id="major"
                          value={formData.major}
                          onChange={(e) => handleInputChange("major", e.target.value)}
                          placeholder="컴퓨터공학과"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="year">학년</Label>
                        <Select onValueChange={(value) => handleInputChange("year", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="학년 선택" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1학년</SelectItem>
                            <SelectItem value="2">2학년</SelectItem>
                            <SelectItem value="3">3학년</SelectItem>
                            <SelectItem value="4">4학년</SelectItem>
                            <SelectItem value="other">기타</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">이메일 *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="example@university.ac.kr"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">연락처</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="010-1234-5678"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Application Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-finder-blue">지원 내용</h3>
                    
                    <div>
                      <Label htmlFor="motivation">지원 동기 및 목표 *</Label>
                      <Textarea
                        id="motivation"
                        value={formData.motivation}
                        onChange={(e) => handleInputChange("motivation", e.target.value)}
                        placeholder="FINDER에 지원하는 이유와 동아리에서 이루고 싶은 목표를 자유롭게 작성해주세요."
                        rows={4}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="experience">관련 경험 및 활동</Label>
                      <Textarea
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => handleInputChange("experience", e.target.value)}
                        placeholder="동아리, 프로젝트, 인턴십 등 관련 경험이 있다면 작성해주세요."
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="skills">보유 기술 및 역량</Label>
                      <Input
                        id="skills"
                        value={formData.skills}
                        onChange={(e) => handleInputChange("skills", e.target.value)}
                        placeholder="Python, Java, 기획, 디자인 등 (쉼표로 구분)"
                      />
                    </div>

                    <div>
                      <Label htmlFor="portfolio">포트폴리오 URL (선택)</Label>
                      <Input
                        id="portfolio"
                        value={formData.portfolio}
                        onChange={(e) => handleInputChange("portfolio", e.target.value)}
                        placeholder="GitHub, 개인 웹사이트, 작품 링크 등"
                      />
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-finder-blue">동의 사항</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="agreeTerms"
                          checked={formData.agreeTerms}
                          onCheckedChange={(checked) => handleCheckboxChange("agreeTerms", checked as boolean)}
                        />
                        <Label htmlFor="agreeTerms">
                          FINDER 동아리 이용약관에 동의합니다. *
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="agreePrivacy"
                          checked={formData.agreePrivacy}
                          onCheckedChange={(checked) => handleCheckboxChange("agreePrivacy", checked as boolean)}
                        />
                        <Label htmlFor="agreePrivacy">
                          개인정보 수집 및 이용에 동의합니다. *
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <Button type="submit" variant="finder" size="lg" className="px-12">
                      지원서 제출하기
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      제출 후 수정이 불가능하니 신중히 작성해주세요.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">문의사항</h2>
            <p className="text-xl text-muted-foreground mb-8">
              지원 과정에서 궁금한 점이 있으시면 언제든 연락해주세요.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">이메일 문의</h3>
                  <p className="text-muted-foreground mb-4">지원 관련 모든 문의</p>
                  <Button variant="finder-outline" asChild>
                    <a href="mailto:finder@university.ac.kr">
                      finder@university.ac.kr
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">동아리방 방문</h3>
                  <p className="text-muted-foreground mb-4">학생회관 3층 FINDER실</p>
                  <Button variant="finder-outline">
                    오시는 길 안내
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply;