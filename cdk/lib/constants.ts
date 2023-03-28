export const constants = {
  CLUSTER_NAME: 'minecraft-ec2',
  SERVICE_NAME: 'minecraft-ec2-server',
  MC_SERVER_CONTAINER_NAME: 'minecraft-server',
  WATCHDOG_SERVER_CONTAINER_NAME: 'minecraft-ecsfargate-watchdog',
  DOMAIN_STACK_REGION: 'us-east-1',
  ECS_VOLUME_NAME: 'data',
  HOSTED_ZONE_SSM_PARAMETER: 'MinecraftHostedZoneIDEC2',
  LAUNCHER_LAMBDA_ARN_SSM_PARAMETER: 'LauncherLambdaRoleArnEC2',
  JAVA_EDITION_DOCKER_IMAGE: 'itzg/minecraft-server',
  BEDROCK_EDITION_DOCKER_IMAGE: 'itzg/minecraft-bedrock-server',
}
