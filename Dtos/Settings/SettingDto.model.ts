
export class SettingDto {
	id: number = 0;
	type: number = 0;
	keys: string | null = "";
	dsAnh: string | null = "";
	title: string | null = "";
	content: string | null = "";
	createdBy: string | null = "";
	updatedBy: string | null = "";
	createdAt!: Date;
	updatedAt: Date | null = null;
	dsAnh: string[] | null = [];
}