import React, { useState, useEffect } from 'react';
import { AppSidebarWrap } from "@/shadcn/components/app-sidebar"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbPageLight,
	BreadcrumbSeparator,
} from "@/shadcn/components/ui/breadcrumb"
import { Separator } from "@/shadcn/components/ui/separator"
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/shadcn/components/ui/sidebar"
import { useAppContext } from "@/Context/AppContext";
import { Link, usePage } from '@inertiajs/react';

export default function AuthenticatedLayout({ children, breadcrumbs }) {
	const user = usePage().props.auth.user;
	const { navMenu, setNavMenu } = useAppContext();

	useEffect(() => {
		async function fetchNavMenu(){
			axios('/api/nav-menu').then(res => {
				if(res.status === 200 && res.data){
					setNavMenu(res.data);
				}
			});
		}
		
		if(Object.keys(navMenu).length === 0){
			fetchNavMenu();
		}
	}, [navMenu]);

	return (
		<SidebarProvider>
			<AppSidebarWrap user={user} navMenu={navMenu} />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
					<div className="flex items-center gap-2 px-4">
						<SidebarTrigger className="-ml-1" />
						<Separator orientation="vertical" className="mr-2 h-4" />
						<Breadcrumb>
							<BreadcrumbList>
								{
									breadcrumbs.map((breadcrumb, i) => (
										<React.Fragment key={breadcrumb.title}>
											<BreadcrumbItem className="hidden md:block">
												{
													breadcrumb.url ? (
														<Link href={breadcrumb.url}>
															<BreadcrumbPageLight>
																{breadcrumb.title}
															</BreadcrumbPageLight>
														</Link>
													) : (
														<BreadcrumbPage>{breadcrumb.title}</BreadcrumbPage>
													)
												}

											</BreadcrumbItem>

											{(i !== breadcrumbs.length - 1) && <BreadcrumbSeparator className="hidden md:block" />}
										</React.Fragment>
									))
								}
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</header>
				{children}
			</SidebarInset>
		</SidebarProvider>
	);
}
