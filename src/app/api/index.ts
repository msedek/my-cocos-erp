import { AnalyticsMockApi } from 'app/api/dashboards/analytics/api';
import { AuthMockApi } from 'app/api/common/auth/api';
import { ECommerceInventoryMockApi } from 'app/api/apps/ecommerce/inventory/api';
import { FileManagerMockApi } from 'app/api/apps/file-manager/api';
import { FinanceMockApi } from 'app/api/dashboards/finance/api';
import { NavigationMockApi } from 'app/api/common/navigation/api';
import { ProjectMockApi } from 'app/api/dashboards/project/api';
import { UserMockApi } from 'app/api/common/user/api';

export const mockApiServices = [
    AnalyticsMockApi,
    AuthMockApi,
    ECommerceInventoryMockApi,
    FileManagerMockApi,
    FinanceMockApi,
    NavigationMockApi,
    ProjectMockApi,
    UserMockApi,
];
