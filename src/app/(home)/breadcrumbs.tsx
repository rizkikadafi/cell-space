import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from 'next/link'
import { useBreadcrumb } from './breadcrumb-context';

export default function DynamicBreadcrumbs() {
  const { breadcrumbData } = useBreadcrumb();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbData.map(({ title }, index) => (
          <div key={index} className='flex items-center'>
            {index > 0 && <BreadcrumbSeparator className='inline-block mr-2' />}
            <BreadcrumbItem>
              {index === breadcrumbData.length - 1 ? (
                <BreadcrumbPage>{title}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink>
                  <Link href={`/${breadcrumbData.slice(0, index + 1).map(b => b.segment).join('/')}`}>
                    {title}
                  </Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
