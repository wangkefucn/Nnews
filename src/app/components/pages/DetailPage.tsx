import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Star } from 'lucide-react';
import { CategoryTag } from '../CategoryTag';

interface DetailPageProps {
  onBack: () => void;
}

export function DetailPage({ onBack }: DetailPageProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between z-10">
        <button onClick={onBack} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button 
          onClick={() => setIsBookmarked(!isBookmarked)}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <Star 
            className={`w-5 h-5 ${isBookmarked ? 'fill-yellow-400 text-yellow-400' : 'text-gray-700'}`} 
          />
        </button>
      </div>

      {/* Content */}
      <div className="px-5 py-5 pb-8">
        {/* Title Section */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <CategoryTag label="IRニュース" variant="IR" />
            <span className="text-xs text-gray-500">2026年1月29日 09:00</span>
          </div>
          <h1 className="text-xl font-semibold text-gray-900 leading-snug">
            NRI、2024年度第3四半期決算を発表　営業利益は前年同期比12.3%増
          </h1>
        </div>

        {/* 30秒摘要 */}
        <section className="mb-6 pb-6 border-b border-gray-200">
          <h2 className="text-sm font-semibold text-slate-700 mb-3 flex items-center">
            <span className="inline-block w-1 h-4 bg-blue-600 mr-2"></span>
            30秒摘要
          </h2>
          
          <div className="space-y-3">
            <div>
              <p className="text-xs text-gray-500 mb-1">日文</p>
              <p className="text-sm text-gray-800 leading-relaxed">
                野村総合研究所は2024年度第3四半期決算を発表し、営業利益が前年同期比12.3%増の450億円となった。デジタル関連事業の好調が主な要因。
              </p>
            </div>
            
            <div>
              <p className="text-xs text-gray-500 mb-1">中文</p>
              <p className="text-sm text-gray-800 leading-relaxed">
                野村综合研究所公布2024财年第三季度财报，营业利润达450亿日元，同比增长12.3%。数字化相关业务表现强劲是主要原因。
              </p>
            </div>
          </div>
        </section>

        {/* 3分钟解读 */}
        <section className="mb-6 pb-6 border-b border-gray-200">
          <h2 className="text-sm font-semibold text-slate-700 mb-3 flex items-center">
            <span className="inline-block w-1 h-4 bg-blue-600 mr-2"></span>
            3分钟解读
          </h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500 mb-2">日文</p>
              <div className="text-sm text-gray-800 leading-relaxed space-y-2">
                <p>
                  野村総合研究所（NRI）は1月29日、2024年度第3四半期（2024年10月～12月）の連結決算を発表した。
                </p>
                <p>
                  売上高は1,850億円（前年同期比8.5%増）、営業利益は450億円（同12.3%増）、経常利益は460億円（同11.8%増）となった。
                </p>
                <p>
                  特に、金融機関向けのデジタルトランスフォーメーション（DX）支援サービスと、生成AI関連のコンサルティング需要が大幅に増加したことが業績向上の主因となった。
                </p>
              </div>
            </div>
            
            <div>
              <p className="text-xs text-gray-500 mb-2">中文</p>
              <div className="text-sm text-gray-800 leading-relaxed space-y-2">
                <p>
                  野村综合研究所（NRI）于1月29日发布2024财年第三季度（2024年10月～12月）合并财报。
                </p>
                <p>
                  销售额为1,850亿日元（同比增长8.5%），营业利润为450亿日元（同比增长12.3%），经常利润为460亿日元（同比增长11.8%）。
                </p>
                <p>
                  特别是面向金融机构的数字化转型（DX）支援服务和生成AI相关咨询需求大幅增加，成为业绩提升的主要原因。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 对我方关注点 */}
        <section className="mb-6">
          <h2 className="text-sm font-semibold text-slate-700 mb-3 flex items-center">
            <span className="inline-block w-1 h-4 bg-orange-500 mr-2"></span>
            对我方关注点
          </h2>
          
          <ul className="space-y-2.5">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
              <span className="text-sm text-gray-800">
                NRI持续加大AI领域投入，可能带来新的外包项目机会
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
              <span className="text-sm text-gray-800">
                金融DX业务增长强劲，建议加强相关技术栈的团队储备
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
              <span className="text-sm text-gray-800">
                业绩良好预示未来预算充足，适合主动提案新合作方向
              </span>
            </li>
          </ul>
        </section>

        {/* Original Link Button */}
        <button className="w-full bg-slate-800 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors">
          <ExternalLink className="w-4 h-4" />
          <span className="text-sm font-medium">查看原文链接</span>
        </button>
      </div>
    </div>
  );
}