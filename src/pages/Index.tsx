import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Building2, Globe, CheckCircle, Cog, BookOpen, Shield, Cpu, Zap, Car, Sun, Plane, Printer, Settings, Wrench, Star, Play, Download, MapPin, Phone, Mail, Calendar, Camera, Trophy, Handshake } from "lucide-react";
import heroImage from "@/assets/hero-lab.jpg";
const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    institution: "",
    designation: "",
    department: "",
    requirement: ""
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/aaf5a3d2-92bc-430c-8d2f-534eb35d7737.png" alt="SkyySkill Labs" className="w-14 h-14" />
            <span className="font-bold text-xl text-primary">SkyySkill Labs</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/ev-lab" className="text-muted-foreground hover:text-primary transition-colors">Labs</Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
            <a href="#clients" className="text-muted-foreground hover:text-primary transition-colors">Clients</a>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            <LeadCaptureForm type="brochure" trigger={<Button variant="cta" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Brochure
                </Button>} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Modern Laboratory" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/90 to-aqua/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <div className="mb-8">
              <Badge className="bg-aqua/20 text-aqua border-aqua/30 mb-6 px-4 py-2 text-sm font-medium">🏆 India’s Leading OEM for EV & Green Skill Labs & CoEs</Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Advanced Lab Solutions for
              <span className="block bg-gradient-to-r from-aqua via-green to-orange bg-clip-text text-transparent mt-2">Next-Gen Universities & Skill Centers</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">Comprehensive OEM solutions for EV, Solar, Drone, and Advanced Manufacturing labs. Trusted by IITs, NITs, and leading institutions across India.
          </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link to="/ev-lab">
                <Button variant="hero" size="lg" className="text-lg px-10 py-6 h-auto">
                  <Play className="w-6 h-6 mr-3" />
                  Explore Our Labs
                </Button>
              </Link>
              <LeadCaptureForm type="brochure" trigger={<Button variant="outline" size="lg" className="text-lg px-10 py-6 h-auto bg-white/10 border-white/30 text-white hover:bg-white hover:text-navy">
                    <Download className="w-6 h-6 mr-3" />
                    Download Catalog
                  </Button>} />
            </div>

            {/* Enhanced Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-4xl md:text-5xl font-bold text-aqua mb-3">500+</div>
                <div className="text-white/90 text-sm font-medium">Institutions Served</div>
                <div className="text-white/70 text-xs mt-1">Across India</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-4xl md:text-5xl font-bold text-green mb-3">30K+</div>
                <div className="text-white/90 text-sm font-medium">Students Trained</div>
                <div className="text-white/70 text-xs mt-1">Annually</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-4xl md:text-5xl font-bold text-orange mb-3">625+</div>
                <div className="text-white/90 text-sm font-medium">Product Category</div>
                <div className="text-white/70 text-xs mt-1">Cutting-edge Tech</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-4xl md:text-5xl font-bold text-aqua mb-3">15+</div>
                <div className="text-white/90 text-sm font-medium">Years Experience</div>
                <div className="text-white/70 text-xs mt-1">Industry Leader</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-aqua/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-green/20 rounded-full blur-xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
      </section>

      {/* Why Us Section */}
      <section id="about" className="py-32 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-aqua/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <Badge className="bg-gradient-to-r from-aqua/90 to-green/80 text-white border-0 mb-8 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              ✨ The SkyySkill Advantage
            </Badge>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 leading-tight">
              Why Leading Institutions 
              <span className="block bg-gradient-to-r from-aqua via-green to-primary bg-clip-text text-transparent mt-4">Choose SkyySkill Labs</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We are a perfect blend of research, skill development, and training - delivering cutting-edge educational solutions that prepare students for the future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[{
            icon: <Cog className="w-8 h-8" />,
            title: "In-house Manufacturing & R&D",
            description: "Complete control over quality, customization, and innovation. Our state-of-the-art facilities ensure precision engineering.",
            highlight: "100% Made in India",
            color: "primary"
          }, {
            icon: <Award className="w-8 h-8" />,
            title: "Sector Skill Council Approved",
            description: "All lab models are certified and aligned with national skill development standards and industry requirements.",
            highlight: "Government Certified",
            color: "aqua"
          }, {
            icon: <Building2 className="w-8 h-8" />,
            title: "Premier Institution Network",
            description: "Trusted by IITs, NITs, Government ITIs, and leading private institutions across India.",
            highlight: "50+ IITs & NITs",
            color: "green"
          }, {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Curriculum-Aligned Solutions",
            description: "Perfect integration with academic programs, from basic concepts to advanced research applications.",
            highlight: "Future-Ready Skills",
            color: "orange"
          }, {
            icon: <Cpu className="w-8 h-8" />,
            title: "AI & Digital Twin Enabled",
            description: "Next-generation technology integration with simulation, virtual reality, and AI-powered learning modules.",
            highlight: "Industry 4.0 Ready",
            color: "primary"
          }, {
            icon: <Settings className="w-8 h-8" />,
            title: "Flexible Lab Configurations",
            description: "From basic school setups to advanced research facilities, fully customizable to your requirements.",
            highlight: "Scalable Solutions",
            color: "aqua"
          }].map((item, index) => <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-border bg-background">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 bg-${item.color} rounded-xl flex items-center justify-center text-white`}>
                      {item.icon}
                    </div>
                    <Badge className={`bg-${item.color}/10 text-${item.color} border-${item.color}/20`}>
                      {item.highlight}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-navy/10 via-aqua/5 to-green/10 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Proven Track Record
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our commitment to excellence is reflected in our achievements and client satisfaction.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-navy mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-aqua mb-2">99%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange mb-2">ISO</div>
                <div className="text-sm text-muted-foreground">Certified Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Labs Section */}
      <section id="labs" className="py-24 bg-gradient-to-br from-secondary/30 via-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="bg-aqua/10 text-aqua border-aqua/20 mb-6 px-4 py-2">
          </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Industry-Leading <span className="text-aqua">Lab Equipment</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              State-of-the-art laboratory solutions designed for next-generation skill development 
              across emerging technology domains.
            </p>
          </div>

          <Tabs defaultValue="ev" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-3 lg:grid-cols-6 bg-background/50 backdrop-blur-sm border border-border/50 p-1 h-auto">
                <TabsTrigger value="ev" className="flex flex-col items-center gap-2 px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-white">
                  <Car className="w-8 h-8" />
                  <span className="text-xs font-medium">EV Lab</span>
                </TabsTrigger>
                <TabsTrigger value="solar" className="flex flex-col items-center gap-2 px-4 py-3 data-[state=active]:bg-aqua data-[state=active]:text-white">
                  <Sun className="w-8 h-8" />
                  <span className="text-xs font-medium">Solar Lab</span>
                </TabsTrigger>
                <TabsTrigger value="drone" className="flex flex-col items-center gap-2 px-4 py-3 data-[state=active]:bg-green data-[state=active]:text-white">
                  <Plane className="w-8 h-8" />
                  <span className="text-xs font-medium">Drone Lab</span>
                </TabsTrigger>
                <TabsTrigger value="additive" className="flex flex-col items-center gap-2 px-4 py-3 data-[state=active]:bg-orange data-[state=active]:text-white">
                  <Printer className="w-8 h-8" />
                  <span className="text-xs font-medium">3D Printing</span>
                </TabsTrigger>
                <TabsTrigger value="cnc" className="flex flex-col items-center gap-2 px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-white">
                  <Settings className="w-8 h-8" />
                  <span className="text-xs font-medium">CNC Sim</span>
                </TabsTrigger>
                <TabsTrigger value="automotive" className="flex flex-col items-center gap-2 px-4 py-3 data-[state=active]:bg-aqua data-[state=active]:text-white">
                  <Wrench className="w-8 h-8" />
                  <span className="text-xs font-medium">Automotive</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {[{
            id: "ev",
            title: "Electric Vehicle Technology Lab",
            description: "Comprehensive EV ecosystem training covering battery technology, motor systems, charging infrastructure, and vehicle diagnostics for the next generation of automotive engineers.",
            features: ["Battery Management Systems", "BLDC Motor Control", "Fast Charging Technology", "EV Diagnostics & Testing", "Hybrid Vehicle Systems", "Safety & Protection Circuits"],
            color: "primary",
            stats: {
              institutions: "200+",
              students: "15K+",
              certifications: "ASDC Approved"
            }
          }, {
            id: "solar",
            title: "Solar & Renewable Energy Lab",
            description: "Complete renewable energy solutions covering photovoltaic systems, wind energy, energy storage, and smart grid integration for sustainable energy professionals.",
            features: ["Solar PV Design & Installation", "Wind Energy Systems", "Battery Storage Solutions", "Grid-Tie Inverters", "Energy Monitoring", "Hybrid Power Systems"],
            color: "aqua",
            stats: {
              institutions: "150+",
              students: "12K+",
              certifications: "MNRE Aligned"
            }
          }, {
            id: "drone",
            title: "Unmanned Aerial Vehicle Lab",
            description: "Advanced UAV technology covering drone assembly, flight control systems, autonomous navigation, and industry-specific applications for aerospace and surveillance sectors.",
            features: ["Flight Control Systems", "Autonomous Navigation", "Gimbal & Camera Integration", "Mission Planning Software", "Industry Applications", "Safety Protocols"],
            color: "green",
            stats: {
              institutions: "100+",
              students: "8K+",
              certifications: "DGCA Guidelines"
            }
          }, {
            id: "additive",
            title: "Additive Manufacturing Lab",
            description: "Cutting-edge 3D printing technologies from rapid prototyping to production-grade manufacturing, covering polymer, metal, and ceramic additive processes.",
            features: ["FDM/SLA/SLS Printing", "Metal 3D Printing", "CAD/CAM Integration", "Post-Processing Techniques", "Quality Control", "Material Science"],
            color: "orange",
            stats: {
              institutions: "120+",
              students: "10K+",
              certifications: "Industry Standard"
            }
          }, {
            id: "cnc",
            title: "CNC Simulation & Programming Lab",
            description: "Virtual CNC machining environment with industry-standard software, simulation tools, and programming techniques for precision manufacturing education.",
            features: ["CNC Programming (G & M Codes)", "Virtual Machining", "CAM Software Training", "Toolpath Optimization", "Industry Simulation", "Quality Inspection"],
            color: "primary",
            stats: {
              institutions: "180+",
              students: "14K+",
              certifications: "ISO Compliant"
            }
          }, {
            id: "automotive",
            title: "Advanced Automotive Technology Lab",
            description: "Modern automotive systems covering engine management, transmission technology, vehicle diagnostics, and emerging automotive electronics for future mobility.",
            features: ["Engine Management Systems", "Transmission Technology", "Vehicle Diagnostics", "Automotive Electronics", "Connected Car Tech", "Emission Control"],
            color: "aqua",
            stats: {
              institutions: "250+",
              students: "18K+",
              certifications: "ARAI Recognized"
            }
          }].map(lab => <TabsContent key={lab.id} value={lab.id} className="mt-0">
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-background via-background to-secondary/20 overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Content Side */}
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-${lab.color} text-white shadow-lg`}>
                          {lab.id === "ev" && <Car className="w-6 h-6" />}
                          {lab.id === "solar" && <Sun className="w-6 h-6" />}
                          {lab.id === "drone" && <Plane className="w-6 h-6" />}
                          {lab.id === "additive" && <Printer className="w-6 h-6" />}
                          {lab.id === "cnc" && <Settings className="w-6 h-6" />}
                          {lab.id === "automotive" && <Wrench className="w-6 h-6" />}
                        </div>
                        <Badge className={`bg-${lab.color}/10 text-${lab.color} border-${lab.color}/20`}>
                          Next-Gen Technology
                        </Badge>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-primary mb-4">{lab.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">{lab.description}</p>
                      
                      <div className="grid sm:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green" />
                            Core Modules
                          </h4>
                          <div className="space-y-3">
                            {lab.features.slice(0, 3).map((feature, index) => <div key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-aqua rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>)}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green" />
                            Advanced Features
                          </h4>
                          <div className="space-y-3">
                            {lab.features.slice(3).map((feature, index) => <div key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>)}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <LeadCaptureForm type="demo" trigger={<Button className={`bg-${lab.color} hover:bg-${lab.color}/90 text-white`} size="lg">
                              Request Demo
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>} />
                        <LeadCaptureForm type="specs" trigger={<Button variant="outline" size="lg">
                              Download Specs
                              <Download className="w-4 h-4 ml-2" />
                            </Button>} />
                        <Button variant="secondary" size="lg" onClick={() => {
                      if (lab.id === "ev") {
                        window.open("https://www.evskilllab.com", "_blank");
                      } else if (lab.id === "solar") {
                        window.open("https://www.evskilllab.com/solarlab", "_blank");
                      } else if (lab.id === "cnc") {
                        window.open("https://www.evskilllab.com/cnc-simulator", "_blank");
                      } else if (lab.id === "drone") {
                        window.location.href = "/drone-lab";
                      } else if (lab.id === "automotive") {
                        window.location.href = "/automotive-lab";
                      } else if (lab.id === "additive") {
                        window.location.href = "/3d-printing-lab";
                      }
                    }} className="bg-gradient-to-r from-aqua to-green text-white border-0 hover:from-aqua/90 hover:to-green/90">
                          Know More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>

                    {/* Stats Side */}
                    <div className="bg-gradient-to-br from-primary/5 via-aqua/5 to-green/5 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="text-center mb-8">
                        <h4 className="text-xl font-bold text-primary mb-2">Lab Impact</h4>
                        <p className="text-sm text-muted-foreground">Real numbers, real results</p>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-6">
                        <div className="text-center p-6 bg-background/50 rounded-2xl border border-border/50">
                          <div className="text-3xl font-bold text-primary mb-2">{lab.stats.institutions}</div>
                          <div className="text-sm text-muted-foreground">Institutions Equipped</div>
                        </div>
                        <div className="text-center p-6 bg-background/50 rounded-2xl border border-border/50">
                          <div className="text-3xl font-bold text-aqua mb-2">{lab.stats.students}</div>
                          <div className="text-sm text-muted-foreground">Students Trained</div>
                        </div>
                        <div className="text-center p-6 bg-background/50 rounded-2xl border border-border/50">
                          <div className="text-lg font-bold text-green mb-2">{lab.stats.certifications}</div>
                          <div className="text-sm text-muted-foreground">Certification</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>)}
          </Tabs>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-secondary/50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Trusted by India's <span className="text-aqua">Leading Institutions</span>
            </h2>
          </div>

          {/* Auto-sliding logos */}
          <div className="relative">
            <div className="flex animate-marquee space-x-16 items-center">
              {["IIT Dharwad", "NIT Raipur", "MNIT Bhopal", "Bosch", "Ola Electric", "ASDC", "Hero MotoCorp", "Mahindra", "TATA Motors", "Bajaj Auto", "TVS Motors", "L&T"].map((client, index) => <div key={index} className="flex-shrink-0 w-48 h-20 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <span className="font-bold text-lg text-foreground whitespace-nowrap">{client}</span>
                </div>)}
              {/* Duplicate for seamless loop */}
              {["IIT Dharwad", "NIT Raipur", "MNIT Bhopal", "Bosch", "Ola Electric", "ASDC", "Hero MotoCorp", "Mahindra", "TATA Motors", "Bajaj Auto", "TVS Motors", "L&T"].map((client, index) => <div key={`dup-${index}`} className="flex-shrink-0 w-48 h-20 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <span className="font-bold text-lg text-foreground whitespace-nowrap">{client}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              What Our <span className="text-aqua">Partners Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            quote: "SkyySkill Labs has transformed our engineering curriculum with their cutting-edge EV lab setup. Student engagement has increased significantly.",
            author: "Dr. Rajesh Kumar",
            position: "HOD, Electrical Engineering",
            institution: "IIT Dharwad"
          }, {
            quote: "The comprehensive training and ongoing support provided by SkyySkill has been exceptional. Their solar lab is world-class.",
            author: "Prof. Meera Patel",
            position: "Director",
            institution: "NIT Raipur"
          }, {
            quote: "Industry-aligned curriculum and practical training modules have prepared our students for real-world challenges effectively.",
            author: "Dr. Amit Sharma",
            position: "Principal",
            institution: "MNIT Bhopal"
          }].map((testimonial, index) => <Card key={index} className="border-0 bg-gradient-card shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-orange text-orange" />)}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-aqua">{testimonial.institution}</div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-primary/90 to-aqua/80 text-white border-0 mb-8 px-8 py-4 text-lg font-bold shadow-lg">
              <Camera className="w-5 h-5 mr-2" />
              Product Gallery
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our <span className="text-aqua">Lab Solutions</span> in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Take a visual tour of our state-of-the-art laboratory equipment and training solutions.
            </p>
          </div>

          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {[{
              image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
              title: "Advanced EV Lab Setup",
              description: "Complete electric vehicle training station with battery management systems"
            }, {
              image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
              title: "Circuit Analysis Equipment",
              description: "High-precision electronic testing and measurement instruments"
            }, {
              image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
              title: "Programming & Simulation",
              description: "Interactive software training modules for technical skills"
            }, {
              image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
              title: "Digital Learning Platform",
              description: "AI-powered learning management system for enhanced education"
            }, {
              image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
              title: "Portable Training Kits",
              description: "Compact and comprehensive skill development solutions"
            }].map((item, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Achievements & Partnerships Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-green/90 to-orange/80 text-white border-0 mb-8 px-8 py-4 text-lg font-bold shadow-lg">
              <Trophy className="w-5 h-5 mr-2" />
              Achievements & Partnerships
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Milestones & <span className="text-green">Collaborations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Celebrating our journey of excellence and strategic partnerships that drive innovation in skill development.
            </p>
          </div>

          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {[{
              image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
              title: "Digital Innovation Showcase",
              description: "Successfully demonstrated our AI-powered lab solutions at the National Education Technology Summit, receiving recognition from leading educational institutions.",
              badge: "Innovation Award"
            }, {
              image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
              title: "IIT Collaboration Summit",
              description: "Strategic partnership meeting with IIT consortium to develop next-generation engineering curricula aligned with Industry 4.0 requirements.",
              badge: "Partnership"
            }, {
              image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
              title: "State-of-the-Art Facility",
              description: "Inauguration of our new 50,000 sq ft manufacturing and R&D facility, expanding our capacity to serve 1000+ institutions annually.",
              badge: "Milestone"
            }, {
              image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop",
              title: "Corporate Excellence Recognition",
              description: "Awarded 'Best OEM Partner' by leading automotive companies for our contribution to electric vehicle skill development ecosystem.",
              badge: "Excellence"
            }, {
              image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=600&fit=crop",
              title: "Government Partnership",
              description: "Signed MoU with Ministry of Skill Development to establish Centers of Excellence across 200+ government institutions nationwide.",
              badge: "Government MoU"
            }].map((item, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full">
                    <div className="relative overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-primary to-aqua text-white border-0 shadow-lg">
                          <Handshake className="w-4 h-4 mr-1" />
                          {item.badge}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6 flex-1">
                      <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Contact/Lead Capture */}
      <section id="contact" className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-white/90">
                Let's co-create the future of skilling.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white">
                  <MapPin className="w-6 h-6 text-aqua" />
                  <div>
                    <div className="font-semibold">Headquarters</div>
                    <div className="text-white/80">Hyderabad, Telangana</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <Phone className="w-6 h-6 text-aqua" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-white/80">+91 9237378472</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <Mail className="w-6 h-6 text-aqua" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-white/80">contact@skyyskill.com</div>
                  </div>
                </div>
              </div>

              <Card className="border-0 bg-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/60" required />
                      <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/60" required />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleInputChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/60" required />
                      <Input name="institution" placeholder="Institution / Company" value={formData.institution} onChange={handleInputChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/60" required />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input name="designation" placeholder="Designation" value={formData.designation} onChange={handleInputChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                      <Input name="department" placeholder="Department" value={formData.department} onChange={handleInputChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                    </div>
                    <Textarea name="requirement" placeholder="Requirement / Query" value={formData.requirement} onChange={handleInputChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/60" rows={4} />
                    <Button variant="cta" size="lg" type="submit" className="w-full">
                      Request Quote / Download Brochure
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Insights & <span className="text-aqua">Innovation</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest in skill development and technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            title: "The Future of EV Skill Development in India",
            excerpt: "How electric vehicle technology is reshaping automotive education and creating new career opportunities...",
            date: "January 15, 2024",
            category: "EV Technology"
          }, {
            title: "AI-Powered Learning: Transforming Technical Education",
            excerpt: "Exploring how artificial intelligence and digital twins are revolutionizing hands-on learning experiences...",
            date: "January 10, 2024",
            category: "Innovation"
          }, {
            title: "Building Centers of Excellence: A Blueprint for Success",
            excerpt: "Key strategies for educational institutions to establish world-class skill development centers...",
            date: "January 5, 2024",
            category: "Education"
          }].map((article, index) => <Card key={index} className="border-0 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                  <Button variant="ghost" className="p-0 h-auto text-aqua hover:text-aqua/80">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="font-bold text-xl text-white">SkyySkill Labs</span>
              </div>
              <p className="text-white/80 mb-4">
                Empowering India's future with cutting-edge skill development solutions.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-white hover:text-aqua">
                  <Globe className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Solutions</h4>
              <div className="space-y-2 text-white/80">
                <div>EV Skill Labs</div>
                <div>Solar Energy Labs</div>
                <div>Drone Technology</div>
                <div>Additive Manufacturing</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <div className="space-y-2 text-white/80">
                <div>About Us</div>
                <div>Our Clients</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
              <div className="space-y-2 text-white/80">
                <div>Bengaluru, Karnataka</div>
                <div>+91 9876543210</div>
                <div>contact@skyyskill.com</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 SkyySkill Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;