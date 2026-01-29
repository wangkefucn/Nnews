import React from 'react';
import { Logo } from './Logo';
import { AppIcon } from './AppIcon';

export function BrandShowcase() {
  return (
    <div className="w-full min-h-screen bg-slate-50 p-8 overflow-y-auto pb-32">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">N前线 品牌视觉系统</h1>
          <p className="text-slate-600">Brand Identity System</p>
        </div>

        {/* Section 1: App Icon */}
        <section className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-6 pb-3 border-b border-slate-200">
            1. App Icon（微信小程序图标）
          </h2>
          <div className="flex flex-col items-center gap-8">
            <div className="flex gap-8 items-center">
              <div className="text-center">
                <AppIcon size={120} />
                <p className="text-xs text-slate-500 mt-3">标准尺寸 120×120</p>
              </div>
              <div className="text-center">
                <AppIcon size={80} />
                <p className="text-xs text-slate-500 mt-3">中尺寸 80×80</p>
              </div>
              <div className="text-center">
                <AppIcon size={60} />
                <p className="text-xs text-slate-500 mt-3">小尺寸 60×60</p>
              </div>
            </div>
            <div className="text-sm text-slate-600 max-w-lg">
              <p className="mb-2">
                <strong>设计说明：</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-600">
                <li>深色渐变背景（深蓝灰 → 深灰蓝）</li>
                <li>白色字母 N 为核心视觉</li>
                <li>右上角蓝色点暗示"前线/洞察"</li>
                <li>20%圆角保持现代感</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Logo Variations */}
        <section className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-6 pb-3 border-b border-slate-200">
            2. Logo 变体
          </h2>
          
          {/* Horizontal - Light */}
          <div className="mb-8">
            <p className="text-sm font-medium text-slate-700 mb-4">横版 Logo（浅色背景）</p>
            <div className="bg-white border border-slate-200 rounded-lg p-8 flex items-center justify-center gap-8">
              <Logo variant="horizontal" size="small" theme="light" />
              <Logo variant="horizontal" size="medium" theme="light" />
              <Logo variant="horizontal" size="large" theme="light" />
            </div>
            <p className="text-xs text-slate-500 mt-2">适用场景：白色背景、浅色界面</p>
          </div>

          {/* Horizontal - Dark */}
          <div className="mb-8">
            <p className="text-sm font-medium text-slate-700 mb-4">横版 Logo（深色背景）</p>
            <div className="bg-slate-800 rounded-lg p-8 flex items-center justify-center gap-8">
              <Logo variant="horizontal" size="small" theme="dark" />
              <Logo variant="horizontal" size="medium" theme="dark" />
              <Logo variant="horizontal" size="large" theme="dark" />
            </div>
            <p className="text-xs text-slate-500 mt-2">适用场景：深色背景、页面顶部导航</p>
          </div>

          {/* Icon Only */}
          <div className="mb-8">
            <p className="text-sm font-medium text-slate-700 mb-4">纯图标（无文字）</p>
            <div className="bg-white border border-slate-200 rounded-lg p-8 flex items-center justify-center gap-8">
              <Logo variant="icon-only" size="small" theme="light" />
              <Logo variant="icon-only" size="medium" theme="light" />
              <Logo variant="icon-only" size="large" theme="light" />
            </div>
            <p className="text-xs text-slate-500 mt-2">适用场景：极小空间、水印、装饰性用途</p>
          </div>

          {/* Square */}
          <div>
            <p className="text-sm font-medium text-slate-700 mb-4">方形 Logo（图标+文字垂直）</p>
            <div className="bg-white border border-slate-200 rounded-lg p-8 flex items-center justify-center gap-12">
              <Logo variant="square" size="small" theme="light" />
              <Logo variant="square" size="medium" theme="light" />
            </div>
            <p className="text-xs text-slate-500 mt-2">适用场景：社交媒体头像、正方形空间</p>
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
