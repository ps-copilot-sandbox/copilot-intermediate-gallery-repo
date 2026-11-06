"use client";

import { useMemo, useRef, useState } from "react";
import { Settings, Users, Globe } from "lucide-react";
import { UploadZone } from "@/components/upload/UploadZone";
import { SectionContainer, SectionTitle, FeatureCard, Hero } from "@/components/ui";
import { AVAILABLE_TAGS } from "@/lib/mock-tag-data";

export default function UploadPage() {
  const [tagsValue, setTagsValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const tagsInputRef = useRef<HTMLInputElement>(null);

  // Tags are comma-separated; parse everything before the token being typed.
  const { committedTags, currentToken } = useMemo(() => {
    const parts = tagsValue.split(",");
    const current = parts[parts.length - 1].trim().toLowerCase();
    const committed = parts
      .slice(0, -1)
      .map((tag) => tag.trim().toLowerCase())
      .filter(Boolean);
    return { committedTags: committed, currentToken: current };
  }, [tagsValue]);

  const suggestions = useMemo(() => {
    return AVAILABLE_TAGS.filter(
      (tag) =>
        !committedTags.includes(tag) &&
        (currentToken === "" || tag.includes(currentToken))
    ).slice(0, 8);
  }, [committedTags, currentToken]);

  const addTag = (tag: string) => {
    const nextValue =
      committedTags.length > 0
        ? `${committedTags.join(", ")}, ${tag}, `
        : `${tag}, `;
    setTagsValue(nextValue);
    setShowSuggestions(true);
    tagsInputRef.current?.focus();
  };

  return (
    <div className="page-gradient">
      <Hero 
        title="Upload Your Photos"
        description="Share your photography with automatic optimization, tagging, and organization. Perfect for building your portfolio or sharing with clients."
      />
      
      <SectionContainer className="pb-0">        
        {/* Upload Zone */}
        <div className="mb-12">
          <UploadZone />
        </div>
      </SectionContainer>

      <SectionContainer bgColor="bg-slate-100 dark:bg-slate-800/50">
        <SectionTitle title="Upload Features" />
        
        {/* Upload Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <FeatureCard 
            icon={Settings}
            title="Automatic Optimization"
            description="Your photos are automatically resized and optimized for web viewing while preserving quality."
            iconColor="text-green-600"
          />

          <FeatureCard 
            icon={Users}
            title="Client Sharing"
            description="Create private galleries for client review and approval with download controls."
            iconColor="text-purple-600"
          />

          <FeatureCard 
            icon={Globe}
            title="Public Portfolio"
            description="Showcase your best work with customizable public galleries and SEO optimization."
            iconColor="text-blue-600"
          />
        </div>

        {/* Upload Settings */}
        <div className="card-base p-6">
          <SectionTitle title="Upload Settings" className="!mb-6" />
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Gallery Assignment */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Assign to Gallery
              </label>
              <select className="form-select">
                <option>Select a gallery...</option>
                <option>Wedding - Sarah & John</option>
                <option>Corporate Headshots</option>
                <option>Nature Portfolio</option>
                <option>Street Photography</option>
              </select>
            </div>

            {/* Visibility */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Visibility
              </label>
              <select className="form-select">
                <option>Public</option>
                <option>Private</option>
                <option>Client Review</option>
                <option>Draft</option>
              </select>
            </div>

            {/* Tags */}
            <div className="md:col-span-2 relative">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Tags (comma-separated)
              </label>
              <input
                ref={tagsInputRef}
                type="text"
                value={tagsValue}
                onChange={(e) => {
                  setTagsValue(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                placeholder="wedding, portrait, outdoor, professional..."
                className="form-input"
                autoComplete="off"
                role="combobox"
                aria-expanded={showSuggestions && suggestions.length > 0}
                aria-autocomplete="list"
              />

              {showSuggestions && suggestions.length > 0 && (
                <ul className="absolute z-10 mt-1 w-full max-h-56 overflow-auto rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg">
                  {suggestions.map((tag) => (
                    <li key={tag}>
                      <button
                        type="button"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => addTag(tag)}
                        className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"
                      >
                        {tag}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Copyright */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Copyright Notice
              </label>
              <input
                type="text"
                placeholder="© 2024 Your Photography Studio"
                className="form-input"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="btn-primary flex-1 py-3">
              Upload & Process
            </button>
            <button className="btn-secondary px-6 py-3">
              Save as Draft
            </button>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
