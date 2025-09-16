import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export interface ContentData {
  [key: string]: any;
}

export function getContent(filename: string): ContentData {
  try {
    const fullPath = join(process.cwd(), 'src', 'content', `${filename}.md`);
    const fileContents = readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return data;
  } catch (error) {
    console.warn(`Could not load content file: ${filename}.md`);
    return {};
  }
}

export function isContentPublished(filename: string): boolean {
  try {
    const content = getContent(filename);
    // Default to true if published field is not set (for backward compatibility)
    return content.published !== false;
  } catch (error) {
    console.warn(`Could not check published status for: ${filename}.md`);
    return false;
  }
}

export function getHeroContent() {
  return getContent('hero');
}

export function getNavigationContent() {
  return getContent('navigation');
}

export function getExpertiseContent() {
  return getContent('expertise');
}

export function getClientsContent() {
  return getContent('clients');
}

export function getInsightsContent() {
  return getContent('insights');
}

export function getContactContent() {
  return getContent('contact');
}
