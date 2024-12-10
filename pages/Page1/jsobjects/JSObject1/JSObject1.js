export default {
	async getImageToDb() {
		try {
			let data = FilePicker1.files[0];
			if (!data) {
				showAlert("No file selected. Please upload a file.", "warning");
				return;
			}

			let base64Data = FilePicker1.files[0].data.split(',')[1]; // Assuming a utility function to convert file to Base64
			let rightHolderId = '0fbbcc97-24db-40a9-b362-609eb83f209e';
			let titleName = 'titl45534e2';

			await Query2.run({
				id: '0fbbcc97-24db-40a9-b362-609eb83f0097', // Make sure `id` is defined or passed appropriately
				name: titleName,
				ownershipImage: base64Data, // Keep it as is
				rightHolderUserId: rightHolderId,
				inserted_at: moment().format('YYYY-MM-DD HH:mm:ss'),
				updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
			});

			showAlert("Data inserted successfully!", "success");
		} catch (error) {
			showAlert(`Error inserting data: ${error.message}`, "error");
		}
	}
}