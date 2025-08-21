namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrCoralYachtEventsSchema

	/// <exclude/>
	public class UsrCoralYachtEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrCoralYachtEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrCoralYachtEventsSchema(UsrCoralYachtEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("f641d6e6-f6db-4957-80bf-f40a7fbbc631");
			Name = "UsrCoralYachtEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("056cc02f-c115-41bd-a94f-7b969e238f81");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,83,48,52,50,6,34,0,131,52,129,211,7,0,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("b787183c-137a-4992-c2a6-65f62d899105"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("056cc02f-c115-41bd-a94f-7b969e238f81"),
				CreatedInSchemaUId = new Guid("f641d6e6-f6db-4957-80bf-f40a7fbbc631"),
				ModifiedInSchemaUId = new Guid("f641d6e6-f6db-4957-80bf-f40a7fbbc631")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("f641d6e6-f6db-4957-80bf-f40a7fbbc631"));
		}

		#endregion

	}

	#endregion

}

