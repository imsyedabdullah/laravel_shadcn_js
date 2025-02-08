import React, { useState, useEffect } from 'react';
import { NavMain } from "@/shadcn/components/nav-main"
import { NavProjects } from "@/shadcn/components/nav-projects"
import { NavUser } from "@/shadcn/components/nav-user"
import { TeamSwitcher } from "@/shadcn/components/team-switcher"
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/shadcn/components/ui/sidebar"


export const AppSidebarWrap = React.memo(AppSidebar);

function AppSidebar({
	user,
	navMenu,
	...props
}) {


	return (
		(<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				{navMenu?.teams?.length && <TeamSwitcher teams={navMenu?.teams} />}
			</SidebarHeader>
			<SidebarContent>
				{navMenu?.navMain?.length && <NavMain items={navMenu?.navMain} />}
				{navMenu?.projects?.length && <NavProjects projects={navMenu?.projects} />}
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>)
	);
}
