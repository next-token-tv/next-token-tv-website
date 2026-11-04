import { brandResourceArchive } from '../../lib/brand-resource-archive';
export const prerender = true;
export const GET = () => brandResourceArchive('brand-kit');
