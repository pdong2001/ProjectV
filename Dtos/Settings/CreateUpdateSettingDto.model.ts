
export class CreateUpdateSettingDto {
	type: number = 0;
	title: string | null = "";
	content: string | null = "";
	dsAnh: string[] | null = [];
}