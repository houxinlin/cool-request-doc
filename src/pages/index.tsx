// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from "react";
import "../css/iconfont.css";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
document.documentElement.setAttribute('data-theme', !darkMode ? 'dark' : 'light');
  };

  const features = [
    {
      title: "HTTP 调试",
      description: "简单直观地发送和调试 HTTP 请求，支持各种请求方法和参数配置",
      icon: "iconfont icon-wangluo",
    },
    {
      title: "gRPC 调试",
      description:
        "轻松调试 gRPC 服务，支持流式和非流式调用，提供友好的界面体验",
        icon: "iconfont icon-GRPC",
    },
    {
      title: "WebSocket 支持",
      description: "实时连接和测试 WebSocket 接口，监控消息传输和连接状态",
      icon: "iconfont icon-Websocket",
    },
    {
      title: "SpringBoot 方法调用",
      description: "直接调用 SpringBoot 容器内的任意方法，无需额外配置",
      icon: "iconfont icon-code",
    },
    {
      title: "静态文档导出",
      description: "一键导出 API 文档，支持多种格式，方便团队协作和接口共享",
      icon: "iconfont icon-wendang",
    },
    {
      title: "OpenAPI 支持",
      description: "完全兼容 OpenAPI 规范，轻松导入导出 Swagger 文档",
      icon: "iconfont icon-OpenAPI",
    },
  ];

  const advantages = [
    {
      title: "简洁直观的界面",
      description: "精心设计的用户界面，让调试过程更加直观高效",
      icon: "iconfont icon-uikit",
    },
    {
      title: "全面的协议支持",
      description: "支持 HTTP、gRPC、WebSocket 等多种协议，满足各种调试需求",
      icon: "iconfont icon-zuzhiqunzu",
    },
    {
      title: "便捷的调试体验",
      description: "智能提示、历史记录、环境变量管理，让调试更加便捷",
      icon: "iconfont icon-ziyuanxhdpi",
    },
  ];

  const testimonials = [
    {
      content:
        "Cool Request 彻底改变了我的调试方式，尤其是对 SpringBoot 方法的直接调用功能，为我节省了大量时间。",
    },
    {
      content:
        "作为一个全栈开发者，我需要频繁测试各种 API。Cool Request 的多协议支持让我的工作效率提升了至少 50%。",
    },
    {
      content:
        "我尝试过市面上几乎所有的 API 调试插件，但 Cool Request 的用户体验和功能集成度是无与伦比的。",
    },
  ];

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"} transition-colors duration-300`}
    >
      {/* 导航栏 */}
      <nav
        className={`fixed w-full z-50 ${darkMode ? "bg-gray-900 shadow-gray-800" : "bg-white shadow-md"} transition-colors duration-300`}
      >
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              <i className="fas fa-snowflake mr-2 text-blue-500"></i>
              Cool Request
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="https://github.com/houxinlin/cool-request"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="fab fa-github mr-1"></i> GitHub
            </a>
            <a
              href="https://vip.coolrequest.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="fab fa-github mr-1"></i> 登录
            </a>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            >
              {darkMode ? (
                <a className="fas fa-sun text-yellow-400"></a>
              ) : (
                <i className="fas fa-moon text-gray-700"></i>
              )}
            </button>
          </div>
          <div className="md:hidden">
            <button className="p-2 cursor-pointer">
              <a href="docs/intro">下载插件</a>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero 区域 */}
      <div
        className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <div
              className="max-w-3xl mb-12"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Cool Request
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-600">
                让调用变得简单
              </h2>
              <p className="text-lg mb-8 mx-auto">
                一款强大的 IDEA 插件，为开发者提供 HTTP、gRPC、WebSocket
                调试能力，支持调用 SpringBoot 容器内方法，导出静态文档和 OpenAPI
                规范。
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="https://plugins.jetbrains.com/plugin/23555-cool-request-rest-client-/versions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button px-8 py-3 bg-blue-600 text-white font-semibold rounded-button hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="fas fa-download mr-2"></i> 下载插件
                </a>
                <a
                  href="docs/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doc button px-8 py-3 bg-blue-600 text-white font-semibold rounded-button hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="fas fa-download mr-2"></i> 查看文档
                </a>
              </div>
            </div>
            <div
              className="w-full max-w-5xl mx-auto"
              style={{ transform: `translateY(${scrollY * -0.03}px)` }}
            >
              <img
                src="img/main.png"
                alt="Cool Request 插件界面"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 功能展示区域 */}
      <section
        id="features"
        className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-50"} transition-colors duration-300`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">强大功能，简单使用</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Cool Request 提供全面的 API 调试功能，满足现代开发者的各种需求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-blue-50"} shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}
                style={{
                  opacity: scrollY > 200 ? 1 : 0,
                  transform: `translateY(${scrollY > 200 ? 0 : 20}px)`,
                  transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
                }}
              >
                <div className="text-blue-500 text-4xl mb-4">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 产品优势 */}
      <section
        id="advantages"
        className={`py-16 ${darkMode ? "bg-gray-900" : "bg-white"} transition-colors duration-300`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">为什么选择 Cool Request</h2>
            <p className="text-lg max-w-2xl mx-auto">
              我们致力于为开发者提供最直观、高效的 API 调试体验
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className={`p-8 rounded-lg ${darkMode ? "bg-gray-800" : "bg-blue-50"} text-center transition-all duration-300`}
                style={{
                  opacity: scrollY > 600 ? 1 : 0,
                  transform: `translateY(${scrollY > 600 ? 0 : 20}px)`,
                  transition: `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`,
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white text-2xl mb-6">
                  <i className={advantage.icon}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {advantage.title}
                </h3>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 使用演示 */}
      <section
        id="demo"
        className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-50"} transition-colors duration-300`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">简单易用的操作界面</h2>
            <p className="text-lg max-w-2xl mx-auto">
              看看 Cool Request 如何简化您的 API 调试工作流程
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10">
            <div
              className="w-full md:w-1/2 order-2 md:order-1"
              style={{
                opacity: scrollY > 1000 ? 1 : 0,
                transform: `translateX(${scrollY > 1000 ? 0 : -50}px)`,
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
              }}
            >
              <h3 className="text-2xl font-semibold mb-4">HTTP 请求调试</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>直观的请求构建界面，支持各种 HTTP 方法和参数配置</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>强大的请求历史记录和收藏功能，方便重复使用</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>智能的响应解析和格式化，支持 JSON、XML 等多种格式</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>环境变量管理，轻松切换测试环境</span>
                </li>
              </ul>
            </div>
            <div
              className="w-full md:w-1/2 order-1 md:order-2"
              style={{
                opacity: scrollY > 1000 ? 1 : 0,
                transform: `translateX(${scrollY > 1000 ? 0 : 50}px)`,
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
              }}
            >
              <img
                src="img/http.png"
                alt="HTTP 请求调试界面"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10 mt-20">
            <div
              className="w-full md:w-1/2"
              style={{
                opacity: scrollY > 1200 ? 1 : 0,
                transform: `translateX(${scrollY > 1200 ? 0 : -50}px)`,
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
              }}
            >
              <img
                src="img/ws.png"
                alt="gRPC 调试界面"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div
              className="w-full md:w-1/2"
              style={{
                opacity: scrollY > 1200 ? 1 : 0,
                transform: `translateX(${scrollY > 1200 ? 0 : 50}px)`,
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
              }}
            >
              <h3 className="text-2xl font-semibold mb-4">
                gRPC 和 WebSocket 调试
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>自动识别 Proto 文件，生成请求模板</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>支持 gRPC 流式调用，实时显示响应数据</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>WebSocket 连接管理和消息发送</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>连接状态监控和错误诊断</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10 mt-20">
            <div
              className="w-full md:w-1/2 order-2 md:order-1"
              style={{
                opacity: scrollY > 1400 ? 1 : 0,
                transform: `translateX(${scrollY > 1400 ? 0 : -50}px)`,
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
              }}
            >
              <h3 className="text-2xl font-semibold mb-4">
                SpringBoot 方法调用与文档导出
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>
                    直接调用 SpringBoot 容器内的任意方法，无需启动额外服务
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>自动识别方法参数，提供智能填充</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>一键导出 API 文档，支持多种格式</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>兼容 OpenAPI 规范</span>
                </li>
              </ul>
            </div>
            <div
              className="w-full md:w-1/2 order-1 md:order-2"
              style={{
                opacity: scrollY > 1400 ? 1 : 0,
                transform: `translateX(${scrollY > 1400 ? 0 : 50}px)`,
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
              }}
            >
              <img
                src="img/method.png"
                alt="SpringBoot 方法调用界面"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 用户评价 */}
      <section
        id="testimonials"
        className={`py-16 ${darkMode ? "bg-gray-900" : "bg-white"} transition-colors duration-300`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">用户评价</h2>
            <p className="text-lg max-w-2xl mx-auto">
              听听开发者们对 Cool Request 的评价
            </p>
          </div>

          <div
            className={`max-w-4xl mx-auto p-8 rounded-lg ${darkMode ? "bg-gray-800" : "bg-blue-50"} shadow-lg relative overflow-hidden`}
            style={{
              backgroundImage: `linear-gradient(to right, ${darkMode ? "rgba(30, 41, 59, 0.8)" : "rgba(239, 246, 255, 0.8)"}, ${darkMode ? "rgba(30, 41, 59, 0.9)" : "rgba(239, 246, 255, 0.9)"})`,
            }}
          >
            <div className="relative z-10">
              <div className="text-4xl text-blue-400 mb-6">
                <i className="fas fa-quote-left"></i>
              </div>

              <div
                className="transition-opacity duration-500"
                style={{ opacity: 1 }}
              >
                <p className="text-lg mb-6 italic">
                  {testimonials[activeTestimonial].content}
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p
                      className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {testimonials[activeTestimonial].position}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${activeTestimonial === index ? "bg-blue-500" : darkMode ? "bg-gray-600" : "bg-gray-300"}`}
                    aria-label={`查看第 ${index + 1} 条评价`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 区域 */}
      <section
        className={`py-16 ${darkMode ? "bg-blue-900" : "bg-blue-600"} text-white`}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            准备好提升您的开发效率了吗？
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            立即下载 Cool Request 插件，体验更简单、更高效的 API 调试方式
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://plugins.jetbrains.com/plugin/23555-cool-request-rest-client-/versions"
              target="_blank"
              rel="noopener noreferrer"
              className="button px-8 py-3 bg-white text-blue-600 font-semibold rounded-button hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="fas fa-download mr-2"></i> 下载插件
            </a>

          </div>
        </div>
      </section>

      {/* 页脚 */}

    </div>
  );
};

export default App;
