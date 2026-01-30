import React from 'react';
import { Logo } from './Logo';
import { AppIcon } from './AppIcon';

export function BrandShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* 品牌标题 */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-slate-900">N前线 品牌视觉系统</h1>
          <p className="text-xl text-gray-600">现代时尚 · AI动感 · 专业克制</p>
        </div>

        {/* Logo展示区 - 新设计 */}
        <section className="bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Logo 设计</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 深色版本 */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl border-2 border-gray-200 flex flex-col items-center gap-6">
                <Logo variant="dark" size="xl" />
                <div className="text-center">
                  <h3 className="font-semibold text-slate-900 mb-1">深色版本</h3>
                  <p className="text-sm text-gray-500">用于浅色背景</p>
                </div>
              </div>
              
              {/* 不同尺寸展示 */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-sm font-medium text-gray-700 mb-4">尺寸变体：</p>
                <div className="flex items-end gap-6 justify-center">
                  <div className="text-center space-y-2">
                    <Logo variant="dark" size="sm" />
                    <span className="text-xs text-gray-500">Small</span>
                  </div>
                  <div className="text-center space-y-2">
                    <Logo variant="dark" size="md" />
                    <span className="text-xs text-gray-500">Medium</span>
                  </div>
                  <div className="text-center space-y-2">
                    <Logo variant="dark" size="lg" />
                    <span className="text-xs text-gray-500">Large</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 浅色版本 */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl flex flex-col items-center gap-6">
                <Logo variant="light" size="xl" />
                <div className="text-center">
                  <h3 className="font-semibold text-white mb-1">浅色版本</h3>
                  <p className="text-sm text-gray-400">用于深色背景</p>
                </div>
              </div>
              
              {/* 不同尺寸展示 */}
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-xl">
                <p className="text-sm font-medium text-gray-300 mb-4">尺寸变体：</p>
                <div className="flex items-end gap-6 justify-center">
                  <div className="text-center space-y-2">
                    <Logo variant="light" size="sm" />
                    <span className="text-xs text-gray-400">Small</span>
                  </div>
                  <div className="text-center space-y-2">
                    <Logo variant="light" size="md" />
                    <span className="text-xs text-gray-400">Medium</span>
                  </div>
                  <div className="text-center space-y-2">
                    <Logo variant="light" size="lg" />
                    <span className="text-xs text-gray-400">Large</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 设计说明 */}
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
            <h4 className="font-semibold text-blue-900 mb-3">✨ 设计理念</h4>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• <strong>几何化"N"字母</strong>：现代简约，专业稳重</li>
              <li>• <strong>蓝色渐变斜杠</strong>：AI科技感，数据流动的视觉隐喻</li>
              <li>• <strong>橙色装饰元素</strong>：重要信息强调，呼应品牌配色</li>
              <li>• <strong>粒子与圆环</strong>：神经网络、数据连接的抽象表达</li>
              <li>• <strong>能量箭头</strong>：实时动态、快速获取信息的符号</li>
            </ul>
          </div>
        </section>

        {/* 应用图标展示 */}
        <section className="bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">应用图标</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-6 rounded-3xl mx-auto w-32 h-32 flex items-center justify-center shadow-xl">
                <Logo variant="light" size="lg" />
              </div>
              <p className="text-sm text-gray-600">iOS风格</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-2xl mx-auto w-32 h-32 flex items-center justify-center shadow-lg">
                <Logo variant="dark" size="lg" />
              </div>
              <p className="text-sm text-gray-600">简约白底</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-3xl mx-auto w-32 h-32 flex items-center justify-center shadow-xl">
                <Logo variant="light" size="lg" />
              </div>
              <p className="text-sm text-gray-600">暗色主题</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-6 rounded-3xl mx-auto w-32 h-32 flex items-center justify-center shadow-xl">
                <Logo variant="light" size="lg" />
              </div>
              <p className="text-sm text-gray-600">强调色版</p>
            </div>
          </div>
        </section>

        {/* Section 3: Color Palette */}
        <section className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-6 pb-3 border-b border-slate-200">
            3. 色彩系统
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {/* Primary Colors */}
            <div>
              <p className="text-sm font-medium text-slate-700 mb-3">主色调</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-lg bg-slate-800 shadow-md"></div>
                  <div className="text-sm">
                    <p className="font-medium text-slate-900">深灰蓝 #1e293b</p>
                    <p className="text-slate-500">Logo、标题、按钮</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-lg bg-slate-700 shadow-md"></div>
                  <div className="text-sm">
                    <p className="font-medium text-slate-900">中灰蓝 #334155</p>
                    <p className="text-slate-500">页面背景渐变</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Colors */}
            <div>
              <p className="text-sm font-medium text-slate-700 mb-3">强调色</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-lg bg-blue-400 shadow-md"></div>
                  <div className="text-sm">
                    <p className="font-medium text-slate-900">蓝色 #60a5fa</p>
                    <p className="text-slate-500">高亮、通知点</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-lg bg-slate-50 border border-slate-200 shadow-sm"></div>
                  <div className="text-sm">
                    <p className="font-medium text-slate-900">浅灰 #f8fafc</p>
                    <p className="text-slate-500">背景、卡片</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Typography */}
        <section className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-6 pb-3 border-b border-slate-200">
            4. 字体规范
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-slate-800 pl-4">
              <p className="text-2xl font-semibold text-slate-900">产品名：N前线</p>
              <p className="text-sm text-slate-500 mt-1">字体：无衬线 / 字重：Semibold 600</p>
            </div>
            <div className="border-l-4 border-slate-600 pl-4">
              <p className="text-base text-slate-700">副标题：核心客户动态 · 每日速览</p>
              <p className="text-sm text-slate-500 mt-1">字体：无衬线 / 字重：Regular 400</p>
            </div>
            <div className="border-l-4 border-slate-400 pl-4">
              <p className="text-sm text-slate-600">日文标题：主要顧客の最新動向を、毎日コンパクトに</p>
              <p className="text-xs text-slate-500 mt-1">字体：无衬线 / 字重：Light 300</p>
            </div>
          </div>
        </section>

        {/* Section 5: Usage Guidelines */}
        <section className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-6 pb-3 border-b border-slate-200">
            5. 使用规范
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-green-700 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                推荐做法
              </h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>✓ 保持Logo周围留白（至少Logo高度的20%）</li>
                <li>✓ 使用指定色彩系统</li>
                <li>✓ 在纯色背景上使用Logo</li>
                <li>✓ 确保对比度足够（深色Logo配浅色背景）</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-red-700 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                禁止事项
              </h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>✗ 不要拉伸或扭曲Logo</li>
                <li>✗ 不要添加阴影或特效</li>
                <li>✗ 不要改变Logo颜色（仅黑/白）</li>
                <li>✗ 不要在复杂背景上使用Logo</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-sm text-slate-500 pt-8 border-t border-slate-200">
          <p>N前线 品牌视觉系统 v1.0</p>
          <p className="mt-1">© 2026 内部使用 · 中高层管理工具</p>
        </div>
      </div>
    </div>
  );
}